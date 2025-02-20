import {
  attach,
  PageDefinition,
  registerExtension,
} from "@openmrs/esm-framework";
import { registerApplication } from "single-spa";
import { routePrefix, routeRegex } from "./helpers";
import type { Activator, ActivatorDefinition } from "./types";

/**
 * Normalizes the activator function, i.e., if we receive a
 * string we'll prepend the SPA base (prefix). We'll also handle
 * the case of a supplied array.
 * @param activator The activator to preprocess.
 */
function preprocessActivator(
  activator: ActivatorDefinition | Array<ActivatorDefinition>
): Activator {
  if (Array.isArray(activator)) {
    const activators = activator.map(preprocessActivator);
    return (location) => activators.some((activator) => activator(location));
  } else if (typeof activator === "string") {
    return (location) => routePrefix(activator, location);
  } else if (activator instanceof RegExp) {
    return (location) => routeRegex(activator, location);
  } else {
    return activator;
  }
}

interface ModernAppExtensionDefinition {
  id: string;
  slot?: string;
  slots?: Array<string>;
  load(): Promise<any>;
  meta?: Record<string, any>;
}

interface LegacyAppExtensionDefinition {
  name: string;
  load(): Promise<any>;
}

type AppExtensionDefinition = ModernAppExtensionDefinition &
  LegacyAppExtensionDefinition;

function trySetup(appName: string, setup: () => any): any {
  try {
    return setup();
  } catch (error) {
    console.error(`Error when trying to set up the module`, appName, error);
    return undefined;
  }
}

export function registerApp(appName: string, appExports: System.Module) {
  const setup = appExports.setupOpenMRS;

  if (typeof setup === "function") {
    const result = trySetup(appName, setup);

    if (result && typeof result === "object") {
      const availableExtensions: Array<Partial<AppExtensionDefinition>> =
        result.extensions ?? [];

      const availablePages: Array<PageDefinition> = result.pages ?? [];

      if (typeof result.activate !== "undefined") {
        availablePages.push({
          load: result.lifecycle,
          route: result.activate,
        });
      }

      availableExtensions.forEach((ext) => tryRegisterExtension(appName, ext));

      availablePages.forEach(({ route, load }, index) => {
        registerApplication(
          `${appName}-page-${index}`,
          load,
          preprocessActivator(route)
        );
      });
    }
  }
}

export function tryRegisterExtension(
  appName: string,
  ext: Partial<AppExtensionDefinition>
) {
  const id = ext.id ?? ext.name;
  const slots = ext.slots || [ext.slot];

  if (!id) {
    console.warn(
      "A registered extension definition is missing an id and thus cannot be registered. " +
        "To fix this, ensure that you define the `id` (or alternatively the `name`) field inside the extension definition.",
      ext
    );
    return;
  }

  if (!ext.load) {
    console.warn(
      "A registered extension definition is missing the loader and thus cannot be registered. " +
        "To fix this, ensure that you define a `load` function inside the extension definition.",
      ext
    );
    return;
  }

  registerExtension(appName, id, ext.load, ext.meta);

  for (const slot of slots) {
    if (slot) {
      attach(slot, id);
    }
  }
}

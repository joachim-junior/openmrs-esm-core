import React, { useEffect, useState } from "react";
import EditableValue from "./editable-value.component";
import isEqual from "lodash-es/isEqual";
import {
  extensionStore,
  ExtensionSlotConfigureValueObject,
  useStore,
} from "@openmrs/esm-framework";
import { ExtensionConfigureTree } from "./extension-configure-tree";
import { Subtree } from "./layout/subtree.component";
import { implementerToolsStore } from "../store";

interface ExtensionSlotsConfigTreeProps {
  config: { [key: string]: any };
  moduleName: string;
}

interface ExtensionSlotImplementerToolsConfig {
  add?: ExtensionSlotConfigValueDescriptor;
  remove?: ExtensionSlotConfigValueDescriptor;
  order?: ExtensionSlotConfigValueDescriptor;
  configure?: ExtensionConfigureDescriptor;
}

interface ExtensionSlotConfigValueDescriptor {
  _value: Array<string>;
  _source: string;
}

interface ExtensionConfigureDescriptor {
  _value: ExtensionSlotConfigureValueObject;
  _source: string;
}

export function ExtensionSlotsConfigTree({
  config,
  moduleName,
}: ExtensionSlotsConfigTreeProps) {
  const { extensionIdBySlotByModule } = useStore(implementerToolsStore);

  const extensionSlotNames = Object.keys(
    extensionIdBySlotByModule[moduleName] || {}
  );

  return extensionSlotNames.length ? (
    <Subtree label={"extension slots"} leaf={false}>
      {extensionSlotNames.map((slotName) => (
        <ExtensionSlotConfigTree
          key={slotName}
          config={config?.[slotName]}
          path={[moduleName, "extensions", slotName]}
        />
      ))}
    </Subtree>
  ) : null;
}

interface ExtensionSlotConfigProps {
  config: ExtensionSlotImplementerToolsConfig;
  path: string[];
}

function ExtensionSlotConfigTree({ config, path }: ExtensionSlotConfigProps) {
  const [assignedExtensions, setAssignedExtensions] = useState<Array<string>>(
    []
  );
  const moduleName = path[0];
  const slotName = path[2];

  useEffect(() => {
    function update(state) {
      setAssignedExtensions(
        state.slots[slotName]?.instances?.[moduleName]?.assignedIds
      );
    }
    update(extensionStore.getState());
    return extensionStore.subscribe(update);
  }, []);

  function setActiveExtensionSlotOnMouseEnter(moduleName, slotName) {
    if (!implementerToolsStore.getState().configPathBeingEdited) {
      implementerToolsStore.setState({
        activeItemDescription: {
          path: [moduleName, slotName],
          value: assignedExtensions,
        },
      });
    }
  }

  function setActiveItemDescriptionOnMouseEnter(
    moduleName,
    slotName,
    key,
    value
  ) {
    if (!implementerToolsStore.getState().configPathBeingEdited) {
      implementerToolsStore.setState({
        activeItemDescription: {
          path: [moduleName, slotName, key],
          source: value?._source,
          description: {
            add: "Add an extension to this slot.",
            remove: "Remove an extension from this slot.",
            order: "Reorder the extensions in this slot.",
            configure:
              "Pass a configuration object directly to one of the extensions in this slot.",
          }[key],
          value: JSON.stringify(value?._value),
        },
      });
    }
  }

  function removeActiveItemDescriptionOnMouseLeave(thisPath) {
    const state = implementerToolsStore.getState();
    if (
      isEqual(state.activeItemDescription?.path, thisPath) &&
      !isEqual(state.configPathBeingEdited, thisPath)
    ) {
      implementerToolsStore.setState({ activeItemDescription: undefined });
    }
  }

  return (
    <Subtree
      label={slotName}
      leaf={false}
      onMouseEnter={() =>
        setActiveExtensionSlotOnMouseEnter(moduleName, slotName)
      }
      onMouseLeave={() =>
        removeActiveItemDescriptionOnMouseLeave([moduleName, slotName])
      }
    >
      {(["add", "remove", "order", "configure"] as const).map((key) => (
        <Subtree
          label={key}
          key={path.join(".") + key}
          leaf={true}
          onMouseEnter={() =>
            setActiveItemDescriptionOnMouseEnter(
              moduleName,
              slotName,
              key,
              config?.[key]
            )
          }
          onMouseLeave={() =>
            removeActiveItemDescriptionOnMouseLeave([moduleName, slotName, key])
          }
        >
          {key === "configure" ? (
            <ExtensionConfigureTree
              moduleName={moduleName}
              slotName={slotName}
              config={config?.configure?._value}
            />
          ) : (
            <EditableValue
              path={path.concat([key])}
              element={
                config?.[key] ?? {
                  _value: undefined,
                  _source: "default",
                  _default: [],
                }
              }
              customType={key}
            />
          )}
        </Subtree>
      ))}
    </Subtree>
  );
}

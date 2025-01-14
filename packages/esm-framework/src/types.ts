declare global {
  interface Window {
    copyText(source: HTMLElement): void;
    getOpenmrsSpaBase(): string;
    openmrsBase: string;
    spaBase: string;
    spaEnv: SpaEnvironment;
    spaVersion?: string;
    importMapOverrides: {
      getCurrentPageMap: () => Promise<ImportMap>;
    };
    installedModules: Array<any>;
  }
}

export type SpaEnvironment = "production" | "development" | "test";

export interface ImportMap {
  imports: Record<string, string>;
}

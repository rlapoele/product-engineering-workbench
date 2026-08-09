export const FIXED_STARTER_ID = 'implementation-ready-web-app-specification.standard-web-app';
export const FIXED_STARTER_VERSION = 1;

export type StarterSection = Readonly<{
  id: string;
  label: string;
  guidance: string;
}>;

export type FixedStarter = Readonly<{
  id: typeof FIXED_STARTER_ID;
  version: typeof FIXED_STARTER_VERSION;
  templateName: 'Implementation-Ready Web App Specification';
  presetName: 'Standard Web App';
  sections: readonly StarterSection[];
}>;

export interface FixedStarterPort {
  active(): FixedStarter;
}

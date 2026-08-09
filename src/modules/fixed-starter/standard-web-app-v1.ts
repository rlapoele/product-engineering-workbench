import {
  FIXED_STARTER_ID,
  FIXED_STARTER_VERSION,
  type FixedStarter,
  type FixedStarterPort,
} from './public';

const sections = [
  ['product-overview', 'Product Overview'],
  ['problem-or-opportunity', 'Problem or Opportunity'],
  ['goals-and-success-criteria', 'Goals and Success Criteria'],
  ['non-goals', 'Non-Goals'],
  ['target-users-or-personas', 'Target Users or Personas'],
  ['user-needs', 'User Needs'],
  ['scope', 'Scope'],
  ['core-features', 'Core Features'],
  ['user-stories-and-use-cases', 'User Stories and Use Cases'],
  ['acceptance-criteria', 'Acceptance Criteria'],
  ['functional-requirements', 'Functional Requirements'],
  ['data-or-domain-model', 'Data or Domain Model'],
  ['ux-ui-design-requirements-and-interaction-notes', 'UX/UI Design Requirements and Interaction Notes'],
  ['technical-constraints-and-preferences', 'Technical Constraints and Preferences'],
  ['risks-assumptions-and-open-questions', 'Risks, Assumptions and Open Questions'],
  ['implementation-guidance', 'Implementation Guidance'],
  ['validation-and-testing-guidance', 'Validation and Testing Guidance'],
  ['export-and-handoff-instructions', 'Export and Handoff Instructions'],
] as const;

export const STANDARD_WEB_APP_V1: FixedStarter = {
  id: FIXED_STARTER_ID,
  version: FIXED_STARTER_VERSION,
  templateName: 'Implementation-Ready Web App Specification',
  presetName: 'Standard Web App',
  sections: sections.map(([id, label]) => ({
    id,
    label,
    guidance: `Capture ${label.toLowerCase()} for this product.`,
  })),
};

export const fixedStarter: FixedStarterPort = {
  active: () => STANDARD_WEB_APP_V1,
};

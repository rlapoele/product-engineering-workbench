const iconGlyphs = Object.freeze({
  leaf: { content: '<path stroke-linecap="round" stroke-linejoin="round" d="M20.4 3.6C13.7 3.9 8.2 7 5.9 13.2c-1.2 3.2-.3 5.7-.3 5.7s2.5.9 5.7-.3C17.5 16.3 20.6 10.8 20.4 3.6Z" /><path stroke-linecap="round" d="M4 20c2.8-4 6.1-7 10-9" />' },
  sun: { content: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m15.36-6.36-1.06 1.06M6.7 17.3l-1.06 1.06m12.72 0-1.06-1.06M6.7 6.7 5.64 5.64M15.75 12A3.75 3.75 0 1 1 8.25 12a3.75 3.75 0 0 1 7.5 0Z" />' },
  'cog-6-tooth': { content: '<path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.094c.55 0 1.02.398 1.11.94l.149.894c.064.388.32.716.676.886.111.053.221.109.33.169.335.185.764.171 1.082-.076l.733-.57a1.125 1.125 0 0 1 1.498.093l.77.77c.39.39.426 1.012.093 1.498l-.57.733c-.247.318-.261.747-.076 1.082.06.109.116.22.17.33.169.356.497.612.885.676l.894.149c.542.09.94.56.94 1.11v1.094c0 .55-.398 1.02-.94 1.11l-.894.149c-.388.064-.716.32-.886.676-.053.111-.109.221-.169.33-.185.335-.171.764.076 1.082l.57.733c.333.486.297 1.108-.093 1.498l-.77.77a1.125 1.125 0 0 1-1.498.093l-.733-.57c-.318-.247-.747-.261-1.082-.076-.11.06-.22.116-.33.17-.356.169-.612.497-.676.885l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.02-.398-1.11-.94l-.149-.894c-.064-.388-.32-.716-.676-.886a6.52 6.52 0 0 1-.33-.169c-.335-.185-.764-.171-1.082.076l-.733.57a1.125 1.125 0 0 1-1.498-.093l-.77-.77a1.125 1.125 0 0 1-.093-1.498l.57-.733c.247-.318.261-.747.076-1.082a6.52 6.52 0 0 1-.17-.33c-.169-.356-.497-.612-.885-.676l-.894-.149a1.125 1.125 0 0 1-.94-1.11V11.44c0-.55.398-1.02.94-1.11l.894-.149c.388-.064.716-.32.886-.676.053-.111.109-.221.169-.33.185-.335.171-.764-.076-1.082l-.57-.733a1.125 1.125 0 0 1 .093-1.498l.77-.77a1.125 1.125 0 0 1 1.498-.093l.733.57c.318.247.747.261 1.082.076.11-.06.22-.116.33-.17.356-.169.612-.497.676-.885l.149-.894Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />' },
  'list-bullet': { content: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75h10.5M9 12h10.5M9 17.25h10.5M4.5 6.75h.01M4.5 12h.01M4.5 17.25h.01" />' },
  bookmark: { content: '<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 3.75H6.75A1.5 1.5 0 0 0 5.25 5.25v15l6.75-3.75 6.75 3.75v-15a1.5 1.5 0 0 0-1.5-1.5Z" />' },
  'ellipsis-horizontal': { solid: true, content: '<circle cx="5" cy="12" r="1.35"/><circle cx="12" cy="12" r="1.35"/><circle cx="19" cy="12" r="1.35"/>' },
  'chevron-right': { content: '<path stroke-linecap="round" stroke-linejoin="round" d="m9 5 7 7-7 7" />' },
  'chat-bubble-left': { content: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12c0 1.85.89 3.49 2.27 4.52L4.5 21l4.1-2.28c.92.34 1.92.53 2.96.53 4.83 0 8.75-3.25 8.75-7.25s-3.92-7.25-8.75-7.25S2.25 8 2.25 12Z" />' },
  'paper-clip': { content: '<path stroke-linecap="round" stroke-linejoin="round" d="m18.38 12.74-5.66 5.66a4.5 4.5 0 0 1-6.36-6.36l6.37-6.37a3 3 0 0 1 4.24 4.24l-6.36 6.37a1.5 1.5 0 0 1-2.13-2.12l5.66-5.66" />' },
  'x-mark': { content: '<path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6 6 18" />' }
});

const renderWorkbenchIcon = (element) => {
  const glyph = iconGlyphs[element.getAttribute('name') ?? ''];
  element.replaceChildren();
  if (!glyph) {
    element.hidden = true;
    return;
  }

  element.hidden = false;
  const label = (element.getAttribute('label') ?? '').trim();
  element.toggleAttribute('aria-hidden', !label);
  if (label) {
    element.setAttribute('role', 'img');
    element.setAttribute('aria-label', label);
  } else {
    element.removeAttribute('role');
    element.removeAttribute('aria-label');
  }

  const strokeWidth = Number.parseFloat(element.getAttribute('stroke-width') ?? '1.5');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('focusable', 'false');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('fill', glyph.solid ? 'currentColor' : 'none');
  svg.setAttribute('stroke', glyph.solid ? 'none' : 'currentColor');
  if (!glyph.solid) svg.setAttribute('stroke-width', String(Number.isFinite(strokeWidth) ? strokeWidth : 1.5));
  svg.innerHTML = glyph.content;
  element.append(svg);
};

class WorkbenchIcon extends HTMLElement {
  static observedAttributes = ['name', 'label', 'size', 'stroke-width'];

  get name() { return this.getAttribute('name') ?? ''; }

  set name(value) { this.setAttribute('name', value); }

  get label() { return this.getAttribute('label') ?? ''; }

  set label(value) {
    if (value) this.setAttribute('label', value);
    else this.removeAttribute('label');
  }

  get size() { return this.getAttribute('size') ?? 'md'; }

  set size(value) { this.setAttribute('size', value); }

  get strokeWidth() { return this.getAttribute('stroke-width') ?? '1.5'; }

  set strokeWidth(value) { this.setAttribute('stroke-width', value); }

  connectedCallback() { this.render(); }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  render() { renderWorkbenchIcon(this); }
}

if (window.customElements) {
  customElements.define('workbench-icon', WorkbenchIcon);
}
document.querySelectorAll('workbench-icon').forEach(renderWorkbenchIcon);

const app = document.querySelector('.l-app');
const dialog = document.querySelector('#project-start-dialog');
const form = document.querySelector('#project-start-form');
const steps = [...document.querySelectorAll('.c-setup-step')];
const stepperItems = [...document.querySelectorAll('.c-stepper li')];
const nextButton = document.querySelector('#next-step');
const previousButton = document.querySelector('#previous-step');
const cancelButton = document.querySelector('#cancel-project-start');
const closeButton = document.querySelector('#close-project-start');
const titleInput = document.querySelector('[name="project-title"]');
const presetInput = document.querySelector('[name="preset"]');
const contextInputs = [...document.querySelectorAll('[name="starting-context"]')];
const toast = document.querySelector('#toast');
let currentStep = 1;
let toastTimeout;

const showToast = (message) => {
  window.clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.hidden = false;
  toastTimeout = window.setTimeout(() => { toast.hidden = true; }, 3200);
};

const selectedContext = () => contextInputs.find((input) => input.checked)?.value ?? 'greenfield';

const updateContextPreview = () => {
  const isGreenfield = selectedContext() === 'greenfield';
  document.querySelector('#greenfield-questions').hidden = !isGreenfield;
  document.querySelector('#brownfield-preview').hidden = isGreenfield;
};

const updateStep = () => {
  steps.forEach((step) => { step.classList.toggle('is-active', Number(step.dataset.step) === currentStep); });
  stepperItems.forEach((item, index) => { item.classList.toggle('is-current', index + 1 === currentStep); });
  previousButton.hidden = currentStep === 1;
  nextButton.textContent = currentStep === steps.length ? 'Create Project' : 'Continue';
  if (currentStep === steps.length) {
    document.querySelector('#creation-summary-title').textContent = titleInput.value.trim() || 'Untitled Project';
    document.querySelector('#creation-summary-copy').textContent = `${selectedContext() === 'greenfield' ? 'Greenfield guidance can become an editable, unsaved first draft.' : 'Brownfield Sources can be added after the Project exists.'} The selected preset is ${presetInput.value}.`;
  }
};

const closeDialog = () => {
  dialog.close();
  currentStep = 1;
  updateStep();
};

document.querySelector('#open-project-start').addEventListener('click', () => {
  dialog.showModal();
  updateContextPreview();
  updateStep();
});

[cancelButton, closeButton].forEach((button) => button.addEventListener('click', closeDialog));

previousButton.addEventListener('click', () => {
  currentStep = Math.max(1, currentStep - 1);
  updateStep();
});

nextButton.addEventListener('click', () => {
  if (currentStep === 2 && !form.reportValidity()) return;
  if (currentStep < steps.length) {
    currentStep += 1;
    updateStep();
    return;
  }
  const title = titleInput.value.trim() || 'Untitled Project';
  document.querySelector('#document-title').textContent = title;
  document.querySelector('#template-subtitle').textContent = `Implementation-Ready Web App Specification · ${presetInput.value}`;
  const isGreenfield = selectedContext() === 'greenfield';
  document.querySelector('#greenfield-guidance').hidden = !isGreenfield;
  document.querySelector('#brownfield-guidance').hidden = isGreenfield;
  closeDialog();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast(`${title} is prepared locally for this prototype.`);
});

contextInputs.forEach((input) => input.addEventListener('change', updateContextPreview));

document.querySelectorAll('[data-scroll-to]').forEach((button) => {
  button.addEventListener('click', () => document.querySelector(`#${button.dataset.scrollTo}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
});

document.querySelector('#context-toggle').addEventListener('click', (event) => {
  const isOpen = app.dataset.rightPanelOpen === 'true';
  app.dataset.rightPanelOpen = String(!isOpen);
  event.currentTarget.setAttribute('aria-expanded', String(!isOpen));
  document.querySelector('#context-content').hidden = isOpen;
});

document.querySelector('#contents-toggle').addEventListener('click', (event) => {
  const panel = document.querySelector('.c-contents-panel');
  const isCollapsed = panel.classList.toggle('is-collapsed');
  event.currentTarget.setAttribute('aria-expanded', String(!isCollapsed));
  event.currentTarget.setAttribute('aria-label', isCollapsed ? 'Expand table of contents' : 'Collapse table of contents');
  if (isCollapsed) {
    panel.style.inlineSize = '3.5rem';
    panel.querySelector('.c-panel-heading > span').hidden = true;
    panel.querySelector('.c-contents-nav').hidden = true;
    panel.querySelector('.c-new-project-button').hidden = true;
  } else {
    panel.style.removeProperty('inline-size');
    panel.querySelector('.c-panel-heading > span').hidden = false;
    panel.querySelector('.c-contents-nav').hidden = false;
    panel.querySelector('.c-new-project-button').hidden = false;
  }
});

document.querySelector('#theme-toggle').addEventListener('click', (event) => {
  const themes = ['system', 'dark', 'light'];
  const activeIndex = themes.indexOf(document.documentElement.dataset.theme ?? 'system');
  const nextTheme = themes[(activeIndex + 1) % themes.length];
  document.documentElement.dataset.theme = nextTheme;
  event.currentTarget.querySelector('span').textContent = `Theme: ${nextTheme}`;
  showToast(`Theme set to ${nextTheme}.`);
});

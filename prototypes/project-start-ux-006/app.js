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

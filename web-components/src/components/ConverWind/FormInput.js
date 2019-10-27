/* eslint-disable no-undef */
import content from './FormInput.template';

const template = document.createElement('template');
template.innerHTML = content;

class FormInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$input = this.shadowRoot.querySelector('input');
    this.$attachbutton = this.shadowRoot.querySelector('.attach');
    this.$sendbutton = this.shadowRoot.querySelector('.send');
    this.$buttons = this.shadowRoot.querySelector('.buttons');
  }

  animateOnSending() {
    const ButOptions = { duration: 1000 };
    const ButtonKeyframes = [
      { opacity: 1, width: '120px' },
      { opacity: 0, width: '50px' },
      { opacity: 1, width: '120px' },
    ];
    const InpOptions = { duration: 1000 };
    const InputKeyframes = [
      { width: 'calc(100% - 120px)' },
      { width: 'calc(280px)' },
      { width: 'calc(100% - 120px)' },
    ];
    this.$buttons.animate(ButtonKeyframes, ButOptions);
    this.$input.animate(InputKeyframes, InpOptions);
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue);
  }

  get value() {
    return this.$input.value;
  }

  set value(value) {
    this.$input.value = value;
  }
}

customElements.define('form-input', FormInput);

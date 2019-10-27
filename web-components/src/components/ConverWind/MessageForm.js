/* eslint-disable no-undef */

import content from './MessageForm.template';

const template = document.createElement('template');
template.innerHTML = content;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$text = this.shadowRoot.querySelector('.text');
    this.$time = this.shadowRoot.querySelector('.time');
  }

  animateMessage() {
    const options = { duration: 700 };
    const keyframes = [
      { transform: 'translateY(100vh)' },
      { transform: 'translateY(0vh)' },
    ];
    this.animate(keyframes, options);
  }
}

customElements.define('message-form', MessageForm);

/* eslint-disable no-undef */
import content from './ChatForm.template';

const template = document.createElement('template');

template.innerHTML = content;

class ChatForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('chat-form', ChatForm);

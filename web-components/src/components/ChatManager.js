/* eslint-disable no-undef */
import content from './ChatManager.template';

const template = document.createElement('template');

template.innerHTML = content;

class ChatManager extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('chat-manager', ChatManager);

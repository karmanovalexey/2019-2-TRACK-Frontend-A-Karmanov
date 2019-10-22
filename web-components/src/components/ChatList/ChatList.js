/* eslint-disable no-undef */
import content from './ChatList.template';

const template = document.createElement('template');

template.innerHTML = content;

class ChatList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('chat-list', ChatList);

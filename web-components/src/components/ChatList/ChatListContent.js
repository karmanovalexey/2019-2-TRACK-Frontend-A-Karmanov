/* eslint-disable no-undef */
import content from './ChatListContent.template';

const template = document.createElement('template');

template.innerHTML = content;

class ChatListContent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('chatlist-content', ChatListContent);

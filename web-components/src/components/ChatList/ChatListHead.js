/* eslint-disable no-undef */
import content from './ChatListHead.template';

const template = document.createElement('template');

template.innerHTML = content;

class ChatListHead extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('chatlist-head', ChatListHead);

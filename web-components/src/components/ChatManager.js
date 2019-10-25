/* eslint-disable no-undef */
import content from './ChatManager.template';

const template = document.createElement('template');

template.innerHTML = content;

class ChatManager extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$converwind = this.shadowRoot.querySelector('conver-window');
    this.$chatlist = this.shadowRoot.querySelector('chat-list');
    this.$converwind.$head.$backbutton.addEventListener('click', this.onChatBack.bind(this));
  }

  onChatBack(event) {
    event.preventDefault();
    this.$converwind.style.display = 'none';
    this.$chatlist.style.display = 'flex';
  }
}

customElements.define('chat-manager', ChatManager);

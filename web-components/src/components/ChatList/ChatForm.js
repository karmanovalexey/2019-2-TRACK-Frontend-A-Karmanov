/* eslint-disable no-undef */
import content from './ChatForm.template';

const template = document.createElement('template');

template.innerHTML = content;

class ChatForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$interlocutor = this.shadowRoot.querySelector('.name');
    this.$text = this.shadowRoot.querySelector('.message');
    this.$time = this.shadowRoot.querySelector('.time');
  }
}

customElements.define('chat-form', ChatForm);

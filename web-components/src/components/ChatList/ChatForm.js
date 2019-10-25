/* eslint-disable no-undef */
import content from './ChatForm.template';

const template = document.createElement('template');

template.innerHTML = content;

class ChatForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$chatManager = document.querySelector('chat-manager');

    this.$chatbutton = this.shadowRoot.querySelector('.chatbutton');
    this.$interlocutor = this.shadowRoot.querySelector('.name');
    this.$text = this.shadowRoot.querySelector('.message');
    this.$time = this.shadowRoot.querySelector('.time');

    this.$chatbutton.addEventListener('click', this.onGoToChat.bind(this));
  }

  onGoToChat(event) {
    event.preventDefault();

    this.$chatManager.$converwind.style.display = 'flex';
    this.$chatManager.$chatlist.style.display = 'none';
  }
}

customElements.define('chat-form', ChatForm);

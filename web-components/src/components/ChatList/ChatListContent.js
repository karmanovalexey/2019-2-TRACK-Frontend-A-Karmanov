/* eslint-disable no-undef */
import content from './ChatListContent.template';

const template = document.createElement('template');

template.innerHTML = content;

class ChatListContent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$createchat = this.shadowRoot.querySelector('.createchat');

    this.$createchat.addEventListener('click', this.onChatCreate.bind(this));
  }

  onChatCreate(event) {
    event.preventDefault();

    const chatObj = {};
    chatObj.interlocutor = 'Name';
    chatObj.text = 'text';
    chatObj.time = 'time';

    this.addChat(chatObj);
  }

  addChat(chat) {
    const newchat = document.createElement('chat-form');
    newchat.$interlocutor.innerText = chat.interlocutor;
    newchat.$text.innerText = chat.text;
    newchat.$time.innerText = chat.time;

    this.shadowRoot.appendChild(newchat);
  }
}

customElements.define('chatlist-content', ChatListContent);

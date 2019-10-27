/* eslint-disable no-undef */
import content from './ChatListContent.template';
import ToLocal, { DateToTime } from '../Functions';

const ChatsArrayKey = 'Chats';

const template = document.createElement('template');

template.innerHTML = content;

class ChatListContent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$createchat = this.shadowRoot.querySelector('.createchat');

    this.ChatRender();
    this.$createchat.addEventListener('click', this.onChatCreate.bind(this));
  }

  onChatCreate(event) {
    event.preventDefault();

    const chatObj = {};
    chatObj.interlocutor = 'Name';
    chatObj.text = 'text';
    chatObj.time = new Date();
    chatObj.key = Math.random(); // Symbol mb?
    this.addChat(chatObj);
    ToLocal(chatObj, ChatsArrayKey);
  }

  addChat(chat) {
    const newchat = document.createElement('chat-form');
    newchat.$interlocutor.innerText = chat.interlocutor;
    newchat.$text.innerText = chat.text;
    newchat.$time.innerText = DateToTime(chat.time);
    this.shadowRoot.appendChild(newchat);
    newchat.scrollIntoView();
    newchat.animateChat();
  }

  ChatRender() {
    const chatArray = JSON.parse(localStorage.getItem(ChatsArrayKey));
    if (chatArray === null) {
      return;
    }
    for (let i = 0; i < chatArray.length; i += 1) {
      this.addChat(chatArray[i]);
    }
  }
}

customElements.define('chatlist-content', ChatListContent);

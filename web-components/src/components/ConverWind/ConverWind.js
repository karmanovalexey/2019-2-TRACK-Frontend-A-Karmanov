/* eslint-disable no-undef */
import content from './ConverWind.template';
import ToLocal, { DateToTime } from '../Functions';

const template = document.createElement('template');
const messagesArrayKey = 'messagesArray';


template.innerHTML = content;

class ConverWind extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$head = this.shadowRoot.querySelector('conv-head');
    this.$chatContainer = this.shadowRoot.querySelector('.message-container');
    this.$input = this.shadowRoot.querySelector('form-input');
    this.$sendbutton = this.$input.$sendbutton;
    this.ChatRender();
    this.addEventListener('submit', this.onSubmit.bind(this));
    this.addEventListener('keypress', this.onKeyPress.bind(this));
    this.$sendbutton.addEventListener('click', this.onClick.bind(this));
  }

  onKeyPress(event) {
    if (event.keyCode === 13) {
      this.dispatchEvent(new Event('submit'));
    }
  }

  onClick() {
    this.dispatchEvent(new Event('submit'));
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.$input.value === '') {
      return;
    }
    const messageObj = {};
    messageObj.messageText = this.$input.value;
    messageObj.sendingTime = new Date();
    this.addMessage(messageObj);
    this.$input.value = '';
    ToLocal(messageObj, messagesArrayKey);
  }

  addMessage(messageObj) {
    const messageBox = document.createElement('message-form');
    messageBox.$text.innerText = messageObj.messageText;
    messageBox.$time.innerText = DateToTime(messageObj.sendingTime);
    this.$input.focus();
    this.$chatContainer.appendChild(messageBox);
    messageBox.scrollIntoView();
    messageBox.animateMessage();
    this.$input.animateOnSending();
  }

  ChatRender() {
    const storageMessageArray = JSON.parse(localStorage.getItem(messagesArrayKey));
    if (storageMessageArray === null) {
      return;
    }
    for (let i = 0; i < storageMessageArray.length; i += 1) {
      this.addMessage(storageMessageArray[i]);
    }
  }
}

customElements.define('conver-window', ConverWind);

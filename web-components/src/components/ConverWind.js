/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const template = document.createElement('template');
const messagesArrayKey = 'messagesArray';


template.innerHTML = `
<style>
  .message-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }

  message-form {
    max-width: 80%;
    min-width: 30%;
    align-items: flex-end;
    align-self: flex-end;
    margin-right: 2vh;
  }
</style>
  <conv-head></conv-head>
  <div class="message-container">

  </div>
  <form-input placeholder="Enter your message"></form-input>
`;

class ConverWind extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$page = document.querySelector('body');

    this.$head = this.shadowRoot.querySelector('conv-head');
    this.$backbutton = this.$head.$backbutton;
    this.$chatContainer = this.shadowRoot.querySelector('.message-container');
    this.$input = this.shadowRoot.querySelector('form-input');
    this.$sendbutton = this.$input.$sendbutton;

    this.myRender();

    this.addEventListener('submit', this.onSubmit.bind(this));
    this.addEventListener('keypress', this.onKeyPress.bind(this));
    this.$sendbutton.addEventListener('click', this.onClick.bind(this));
    this.$backbutton.addEventListener('click', this.onBack.bind(this));
  }

  onBack(event) {
    event.preventDefault();
    this.style.display = 'none';
    this.$page.appendChild(this.$input);
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
    this.messageToLocal(messageObj);
  }

  addMessage(messageObj) {
    const messageBox = document.createElement('message-form');
    messageBox.$text.innerText = messageObj.messageText;
    const time = new Date(messageObj.sendingTime);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    hours = (hours < 10) ? (`0${hours}`) : hours;
    minutes = (minutes < 10) ? (`0${minutes}`) : minutes;
    messageBox.$time.innerText = `${hours}:${minutes}`;
    this.$chatContainer.appendChild(messageBox);
    this.$chatContainer.scrollTop = 9999;
  }

  messageToLocal(messageObj) {
    this.storageMessageArray = JSON.parse(localStorage.getItem(messagesArrayKey));
    if (this.storageMessageArray === null) {
      this.storageMessageArray = [];
    }
    this.storageMessageArray.push(messageObj);
    localStorage.setItem(messagesArrayKey, JSON.stringify(this.storageMessageArray));
  }

  myRender() {
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

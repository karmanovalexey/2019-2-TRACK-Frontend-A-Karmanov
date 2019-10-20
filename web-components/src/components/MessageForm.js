/* eslint-disable no-undef */
const template = document.createElement('template');
template.innerHTML = `
<!DOCTYPE html>
<html>
  <head>

  </head>
  <body>
      <style>
        .bubble{
          background-color: rgba(24, 58, 55 ,.8);
          width: 100%;
          display: inline-flex;
          line-height: 4vh;
          flex-direction: column;
          border-radius: 3vh;
          margin-top: 1vh;
          margin-bottom: 1vh;
          align-items: flex-end;
        }

        .text{
          color: white;
          display: flex;
          align-self: self-end;
          width: auto;
          height: auto;
          word-break: break-word;  
          padding: 10px 10px 5px 10px;
          font-size: calc(2vh + 10px);
        }

        .time{
          color: rgb(212, 212, 212);
          margin-right: 3vh;
          font-size: 2vh;       
        }

      </style>
      <div class="bubble">
        <div class="text">
        
        </div>
        <div class="time">
        </div>
      </div>
  </body>
</html>

`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$text = this.shadowRoot.querySelector('.text');
    this.$time = this.shadowRoot.querySelector('.time');
  }
}

customElements.define('message-form', MessageForm);

/* eslint-disable no-undef */
const template = document.createElement('template');
template.innerHTML = `
    <style>
        .line-block {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 40px;
            width: 100%;
        }

        input {
            border-width: 1.4px;
            border-radius: 35px;
            border-color: rgb(24, 58, 55);
            outline: none;
            width: calc(100% - 120px);
            height: 100%;
            font-size: 100%;
            padding: 0 10px 0 30px;
            margin: 5px 0 0 20px;
            background-color: rgba(24, 58, 55, .8);
        }

        input:focus, input:hover {
          border-color: rgba(24, 58, 55, .1);
          background-color: rgba(24, 58, 55, .1);
          transition: 0.4s;
        }

        :host {
            display: inline-block;
            
        }

        .buttons {
          display: flex;
          flex-direction: row;
          width: 120px;
          height: 100%;
        }

        .attach {
          width: 40px;
          height: 40px;
          border: none;
          outline: none;
          margin: 0 5px 0 15px;
          border-radius: 100%;
          background-color: transparent;
        }

        .attach-icon {
          fill: rgb(24, 58, 55);
          width: 100%;
          height: 100%;
        }

        .attach:focus, .attach:hover .attach-icon{
          fill: rgb(255, 255, 255);
          transition: 0.2s;
        }

        .attach:active { 
          background: rgba(24, 58, 55 ,.5);
          transition: 0.1s;
        }

        .send {
          width: 40px;
          height: 40px;
          border: none;
          outline: none;
          margin: 0 15px 0 5px;
          border-radius: 100%;
          background-color: transparent;
        }

        .send-icon {
          fill: rgb(24, 58, 55);
          width: 100%;
          height: 100%;
        }

        .send:focus, .send:hover .send-icon{
          fill: rgb(255, 255, 255);
          transition: 0.2s;
        }

        .send:active { 
          background: rgba(24, 58, 55 ,.5);
          transition: 0.1s;
        }

    </style>
    <div class = "line-block">
      <input type="text">
      <div class = "buttons">
        <button class="attach">
          
          <svg class = "attach-icon" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
            viewBox="0 0 51.619 51.619" style="enable-background:new 0 0 51.619 51.619;" xml:space="preserve">
            <path d="M50.14,19.206c-0.391-0.391-1.023-0.391-1.414,0L21.432,46.5c-2.012,2.012-4.697,3.119-7.563,3.119
            c-2.867,0-5.553-1.107-7.564-3.119s-3.119-4.697-3.119-7.564c0-2.866,1.107-5.552,3.119-7.563L33.598,4.078
            c2.897-2.896,7.445-2.719,10.579,0.413c3.133,3.133,3.311,7.682,0.414,10.579L18.951,40.711c-1.433,1.433-3.767,1.434-5.203,0
            c-1.434-1.435-1.434-3.769,0-5.203l17.369-17.369c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L12.334,34.093
            c-2.214,2.214-2.214,5.816,0,8.031c2.216,2.216,5.819,2.212,8.031,0l25.641-25.641c3.703-3.704,3.525-9.468-0.414-13.407
            c-3.938-3.938-9.703-4.117-13.407-0.413L4.89,29.958c-2.39,2.389-3.705,5.577-3.705,8.978c0,3.401,1.315,6.59,3.705,8.979
            c2.389,2.39,5.577,3.705,8.979,3.705c3.4,0,6.589-1.315,8.978-3.705L50.14,20.62C50.531,20.229,50.531,19.596,50.14,19.206z"/>
          </svg>

        </button>
        <button class="send">
                  
          <svg class = "send-icon" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
            viewBox="0 0 490.282 490.282" style="enable-background:new 0 0 490.282 490.282;" xml:space="preserve">
            <path d="M0.043,245.197c0.6,10.1,7.3,18.6,17,21.5l179.6,54.3l6.6,123.8c0.3,4.9,3.6,9.2,8.3,10.8c1.3,0.5,2.7,0.7,4,0.7
            c3.5,0,6.8-1.4,9.2-4.1l63.5-70.3l90,62.3c4,2.8,8.7,4.3,13.6,4.3c11.3,0,21.1-8,23.5-19.2l74.7-380.7c0.9-4.4-0.8-9-4.2-11.8
            c-3.5-2.9-8.2-3.6-12.4-1.9l-459,186.8C5.143,225.897-0.557,235.097,0.043,245.197z M226.043,414.097l-4.1-78.1l46,31.8
            L226.043,414.097z M391.443,423.597l-163.8-113.4l229.7-222.2L391.443,423.597z M432.143,78.197l-227.1,219.7l-179.4-54.2
            L432.143,78.197z"/>
          </svg>

        </button>
      </button>
    </div>
`;

class FormInput extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$input = this.shadowRoot.querySelector('input');
    this.$button = this.shadowRoot.querySelector('.send');
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue);
  }

  get value() {
    return this.$input.value;
  }

  set value(value) {
    this.$input.value = value;
  }
}

customElements.define('form-input', FormInput);

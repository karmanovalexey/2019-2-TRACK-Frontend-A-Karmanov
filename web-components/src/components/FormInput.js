/* eslint-disable no-undef */
const template = document.createElement('template');
template.innerHTML = `
<style>
        input {
          border: 0;
          outline: none;
          height: 35px;
          width: calc(100% - 2px);
          font-size: 18px;
          background-color: rgb(240,240,240);
        }
        :host {
          display: inline-block;
          border: 1px solid rgba(25, 25, 25, 0.32);
        }
        .attach-button {
          width: 41px;
          background-color: rgb(240,240,240);
          display: inline-block;
          cursor: pointer;
          border: none;
          outline: none;
          border-radius: 100%;
          transition: 0.2s;
          color: #888;
        }
        .attach-button:focus { color: #888C; }
        .attach-button:hover { color: #888B; }
        .attach-button:active { background: #0002; }
        .submit-button {
          margin-right: 5px;
          margin-left: -35px;
          width: 41px;
          visibility: hidden;
          background-color: rgb(240,240,240);
          display: inline-block;
          cursor: pointer;
          border: none;
          outline: none;
          border-radius: 100%;
          transition: 0.2s;
          color: rgb(250, 223, 101);
        }
        .submit-button:focus { color: rgb(250, 223, 101); }
        .submit-button:hover { color: rgb(250, 223, 101); }
        .submit-button:active { background: #0002; }
        .attach-button-img {
          height: 30px;
          width: 30px;
          padding-top: 4px;
          fill: currentColor;
        }
        .submit-button-img {
          height: 30px;
          width: 30px;
          padding-top: 4px;
          fill: currentColor;
        }
      </style>
      <input type="text">
      <button class="attach-button"><svg class="attach-button-img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     width="510px" height="510px" viewBox="0 0 510 510" xml:space="preserve">
    <path d="M140.25,395.25C63.75,395.25,0,331.5,0,255s63.75-140.25,140.25-140.25H408c56.1,0,102,45.9,102,102
    c0,56.1-45.9,102-102,102H191.25c-35.7,0-63.75-28.05-63.75-63.75s28.05-63.75,63.75-63.75H382.5v38.25H191.25
    c-15.3,0-25.5,10.2-25.5,25.5s10.2,25.5,25.5,25.5H408c35.7,0,63.75-28.05,63.75-63.75S443.7,153,408,153H140.25
    c-56.1,0-102,45.9-102,102c0,56.1,45.9,102,102,102H382.5v38.25H140.25z"/>
    </svg></button>
      <button type="submit" class="submit-button">
      <svg class="submit-button-img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="459px" height="459px" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
<path d="M459,216.75L280.5,38.25v102c-178.5,25.5-255,153-280.5,280.5C63.75,331.5,153,290.7,280.5,290.7v104.55L459,216.75z"/>
        </svg>
    </button>
`;

class FormInput extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$input = this.shadowRoot.querySelector('input');
    this.$button = this.shadowRoot.querySelector('.submit-button');
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

/* eslint-disable no-undef */
import content from './ConvHead.template';

const template = document.createElement('template');

template.innerHTML = content;

class ConvHead extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$backbutton = this.shadowRoot.querySelector('.back');
  }
}

customElements.define('conv-head', ConvHead);

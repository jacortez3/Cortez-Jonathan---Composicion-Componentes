customElements.define('header-component', class extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById('header-component');
    const content = document.importNode(template.content, true);
    this.attachShadow({ mode: 'open' }).appendChild(content);
  }
});

customElements.define('list-component', class extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById('list-component');
    const content = document.importNode(template.content, true);
    this.attachShadow({ mode: 'open' }).appendChild(content);
  }
});

customElements.define('form-component', class extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById('form-component');
    const content = document.importNode(template.content, true);
    this.attachShadow({ mode: 'open' }).appendChild(content);
  }
});

customElements.define('container-component', class extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById('container-component');
    const content = document.importNode(template.content, true);
    this.attachShadow({ mode: 'open' }).appendChild(content);
  }
});
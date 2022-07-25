export class HomePage extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    :host {
      display: block;
      overflow: hidden; 
    }
    </style>
    <section class="home-page">
    <h1 class="title">Yoga Wizard</h1>
    <p class="subtitle">creates your Yoga session</p>
    <a
      class="start-button"
      id="start-button"
      href="/poses">Let's GO
      </a>
  </section>    
    `;
  }
}
customElements.define("home-page", HomePage);

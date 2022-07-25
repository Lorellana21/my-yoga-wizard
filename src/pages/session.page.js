
import '../components/session.component';

export class SessionPage extends HTMLElement {



  constructor() {
    super();
  }

  


connectedCallback() {
  this.innerHTML = `
  <section class="main-content" id="main-content">
  <session-component/>
    </section>
  `;
}
  
}
customElements.define("session-page", SessionPage);


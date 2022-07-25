import "./../components/poses.component";

export class PosesPage extends HTMLElement {

  constructor() {
    super();
}

connectedCallback() {
    this.innerHTML = `
    <section class="main-content" id="main-content">
        <poses-component/>
      </section>
    `;
}


}

customElements.define("poses-page", PosesPage);

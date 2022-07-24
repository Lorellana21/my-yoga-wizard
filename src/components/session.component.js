import { css, html, LitElement } from "lit";

export class SessionComponent extends LitElement {
  static get properties() {
    return {
      sessionTitle: { type: String }
    
    };
  }
  constructor() {
    super();
    this.sessionTitle = "My Yoga session";
  }
  //lo quito para que me coja los estilos aqui
  // createRenderRoot() {
  //   return this;
  // }
  static get styles() {
    return css`
      :host {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        
      }
      .favorites {
        display: flex;
        flex-flow: column wrap;
        justify-content: flex-start;
        align-items: center;
        width: 60%;
        height: 500px;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 5px 5px var(--color-primary);
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
      .favorites__title {
        font-size: 1.5rem;
        color: var(--color-primary);
      }
      .button {
        --button-color: var(--color-basic-positive);
        --button-border-color: var(--color-primary-light);
        --button-background: var(--color-strength);

        min-width: 8rem;
        height: 2.5rem;
        padding: 0 1.25rem;
        cursor: pointer;
        border-radius: 1rem;
        border: 0.4em solid var(--button-border-color);
        color: var(--button-color);
        background: var(--button-background);
        transition: all 0.35s ease;
      }
      span {
        font-size: 1rem;
        color: var(--color-primary);
      }
      .button:hover {
        --button-color: var(--color-primary-dark-extra);
        --button-border-color: var(--color-primary-dark-extra);
        --button-background: var(--color-primary-light);
      }
    `;
  }

  

  

  render() {
    return html`
        <section class="favorites">
          <header class="favorites__header">
            <h2 class="favorites__title">${this.favoriteTitle}</h2>
            <button
              class="button"
              id="button"
              aria-label="Search Poses"
              @click="${this.reset}"
            >
              <span>Reset</span>
            </button>
          </header>
          <article>
            <ul class="favorites__list"></ul>
          </article>
        </section>
      </div>
    `;
  }
}

customElements.define("session-component", SessionComponent);

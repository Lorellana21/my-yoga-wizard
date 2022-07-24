// import { subscribe } from "valtio/vanilla";
// import { state } from "../states/state";
import '../components/session.component';

export class SessionPage extends HTMLElement {

//   unsubscribe;

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.unsubscribe = subscribe(state, () => {
      this.render();
    });
  }

//   disconnectedCallback() {
//     this.unsubscribe();
//   }

  render() {
    this.innerHTML = `
     <h1>Yoga session</h1>
     <p>${state.count} --- ${state.text}</p>
     <button id="add">Add</button>
     <session-component/>
    
    `;
    const button = document.querySelector("#add");
    button.addEventListener("click", () => {
      ++state.count;
      state.text = `Cambio ${state.count}`;
      console.log(state);
    });
  }
}
customElements.define("session-page", SessionPage);


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCharacters } from './services/characters.js';
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const characters = yield getCharacters();
            this.render(characters);
        });
    }
    render(characters) {
        if (!this.shadowRoot)
            return;
        const personajes = characters.map(({ birthday, char_id, img, name, nickname, occupation, status }) => `
        <link rel="stylesheet" href="./styles.css"/>

        <body>
        <br>
        <div class="container">
        <div class="card">
        <img src=${img}>
        <h4>${char_id}: ${name}</h4>
        <h5>Aka: ${nickname}</h5>
        <h5>Birthday: ${birthday}</h5>
        <h5>Occupation: ${occupation}</h5>
        <h5>Status: ${status}</h5>
        <a href="#">Leer más</a>
        </div>
        </div>
        <br>
        </body>`);
        this.shadowRoot.innerHTML = `
        <section>
          ${personajes.join("")}
        </section>
        `;
    }
}
customElements.define('app-container', AppContainer);

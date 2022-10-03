import { getCharacters } from './services/characters.js';
import { Character } from './types/index.js';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    async connectedCallback() {
        const characters = await getCharacters();
        this.render(characters);
    }

    render(characters: Array<Character>) {
        if(!this.shadowRoot) return;

        const personajes = characters.map(({ birthday, char_id, img, name, nickname, occupation, status}) => `
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
        `
    }
}

customElements.define('app-container', AppContainer); 
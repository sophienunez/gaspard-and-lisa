import * as components from "./components/index.js";
import data from "./data.js";
import Card, { Attribute } from "./components/Card/Card.js";

class AppContainer extends HTMLElement {
    profiles: Card[] = [];
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        data.forEach((user) => {
            const Card = this.ownerDocument.createElement(
                "my-card"
                ) as Card;
                Card.setAttribute(Attribute.name, user.name);
                Card.setAttribute(Attribute.uid, String(user.id));
                Card.setAttribute(Attribute.city, user.address.city);
                Card.setAttribute(Attribute.company, user.company.name);
                Card.addEventListener("click", () => console.log(user.name));
                this.profiles.push(Card);
            });
        }
        
        connectedCallback() {
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;
                
                this.profiles.forEach((profile) => {
                    this.shadowRoot?.appendChild(profile);
                });
            }
        }
    }
    
customElements.define("app-container", AppContainer);
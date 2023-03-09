import data from "./data.js";
import { Attribute } from "./components/Card/Card.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const Card = this.ownerDocument.createElement("my-card");
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
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
        }
    }
}
customElements.define("app-container", AppContainer);

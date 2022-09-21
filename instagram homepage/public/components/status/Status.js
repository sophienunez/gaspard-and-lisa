var StatusAttributes;
(function (StatusAttributes) {
    StatusAttributes["profilepic"] = "profilepic";
    StatusAttributes["username"] = "username";
})(StatusAttributes || (StatusAttributes = {}));
class Status extends HTMLElement {
    constructor() {
        super();
        this.profilepic = '';
        this.username = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(StatusAttributes);
    }
    attributeChangedCallback(prop, _, newValue) {
        this[prop] = newValue;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/styles.css"/>
            <div class="status-card">
                <div class="profile-pic normal"><img src="${this.profilepic}" alt=""></div>
                <p class="username">${this.username}</p>
             </div>
        `;
    }
}
customElements.define("my-status", Status);
export default Status;

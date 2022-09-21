var SuggestionsAttributes;
(function (SuggestionsAttributes) {
    SuggestionsAttributes["profilepic"] = "profilepic";
    SuggestionsAttributes["username"] = "username";
    SuggestionsAttributes["otheruser"] = "otheruser";
})(SuggestionsAttributes || (SuggestionsAttributes = {}));
class Suggestions extends HTMLElement {
    constructor() {
        super();
        this.profilepic = '';
        this.username = '';
        this.otheruser = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(SuggestionsAttributes);
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
                <div class="profile-card">
                    <div class="profile-pic normal">
                        <img src="${this.profilepic}" alt="">
                    </div>
                    <div>
                        <p class="username">${this.username}</p>
                        <p class="sub-text">followed by ${this.otheruser}</p>
                    </div>
                    <button class="action-btn">follow</button>
                </div>
        `;
    }
}
customElements.define("my-suggestions", Suggestions);
export default Suggestions;

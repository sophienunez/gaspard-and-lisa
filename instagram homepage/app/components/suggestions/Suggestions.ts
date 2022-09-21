enum SuggestionsAttributes {
    profilepic = 'profilepic',
    username = 'username',
    otheruser = 'otheruser',
}

class Suggestions extends HTMLElement {
    profilepic = '';
    username = '';
    otheruser = '';

    static get observedAttributes(): SuggestionsAttributes[] {
        return Object.keys(SuggestionsAttributes) as SuggestionsAttributes[];
    }

    attributeChangedCallback(prop: SuggestionsAttributes, _: string, newValue: string): void {
        this[prop] = newValue;
    }

    constructor(){
        super();
        this.attachShadow({ mode : 'open'})
    }

    connectedCallback(): void {
        this.render();
    }

    render(): void {
        if(!this.shadowRoot) return;
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
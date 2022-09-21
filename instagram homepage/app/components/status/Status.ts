enum StatusAttributes {
    profilepic = 'profilepic',
    username = 'username',
}

class Status extends HTMLElement {
    profilepic = '';
    username = '';

    static get observedAttributes(): StatusAttributes[] {
        return Object.keys(StatusAttributes) as StatusAttributes[];
    }

    attributeChangedCallback(prop: StatusAttributes, _: string, newValue: string): void {
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
            <div class="status-card">
                <div class="profile-pic normal"><img src="${this.profilepic}" alt=""></div>
                <p class="username">${this.username}</p>
             </div>
        `;
    }
}

customElements.define("my-status", Status);
export default Status;
enum ProfileAttributes {
    profilepic = 'profilepic',
    username = 'username',
    subtext = 'subtext',
}

class Profile extends HTMLElement {
    profilepic = '';
    username = '';
    subtext = '';

    static get observedAttributes(): ProfileAttributes[] {
        return Object.keys(ProfileAttributes) as ProfileAttributes[];
    }

    attributeChangedCallback(prop: ProfileAttributes, _: string, newValue: string): void {
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
                        <p class="sub-text">${this.subtext}</p>
                    </div>
                    <button class="action-btn">switch</button>
        </div>
        `;
    }
}

customElements.define("my-profile", Profile);
export default Profile;
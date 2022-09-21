var ProfileAttributes;
(function (ProfileAttributes) {
    ProfileAttributes["profilepic"] = "profilepic";
    ProfileAttributes["username"] = "username";
    ProfileAttributes["subtext"] = "subtext";
})(ProfileAttributes || (ProfileAttributes = {}));
class Profile extends HTMLElement {
    constructor() {
        super();
        this.profilepic = '';
        this.username = '';
        this.subtext = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(ProfileAttributes);
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
                        <p class="sub-text">${this.subtext}</p>
                    </div>
                    <button class="action-btn">switch</button>
        </div>
        `;
    }
}
customElements.define("my-profile", Profile);
export default Profile;

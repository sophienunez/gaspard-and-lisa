var NavbarAttributes;
(function (NavbarAttributes) {
    NavbarAttributes["logo"] = "logo";
    NavbarAttributes["iconhome"] = "iconhome";
    NavbarAttributes["iconmessenger"] = "iconmessenger";
    NavbarAttributes["iconexplore"] = "iconexplore";
    NavbarAttributes["iconadd"] = "iconadd";
    NavbarAttributes["iconlike"] = "iconlike";
})(NavbarAttributes || (NavbarAttributes = {}));
class Navbar extends HTMLElement {
    constructor() {
        super();
        this.logo = '';
        this.iconhome = '';
        this.iconmessenger = '';
        this.iconexplore = '';
        this.iconadd = '';
        this.iconlike = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(NavbarAttributes);
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
    <nav class="navbar">
        <div class="nav-wrapper">
            <img src="${this.logo}" class="brand-img" alt="">
            <input type="text" class="search-box" placeholder="search">
            <div class="nav-items">
                <img src="${this.iconhome}" class="icon" alt="">
                <img src="${this.iconmessenger}" class="icon" alt="">
                <img src="${this.iconadd}" class="icon" alt="">
                <img src="${this.iconexplore}" class="icon" alt="">
                <img src="${this.iconlike}" class="icon" alt="">
                <div class="icon user-profile"></div>
            </div>
        </div>
    </nav>
        `;
    }
}
customElements.define("my-navbar", Navbar);
export default Navbar;

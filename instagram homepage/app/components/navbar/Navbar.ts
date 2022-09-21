enum NavbarAttributes {
    logo = 'logo',
    iconhome = 'iconhome',
    iconmessenger = 'iconmessenger',
    iconexplore = 'iconexplore',
    iconadd = 'iconadd',
    iconlike = 'iconlike',
}

class Navbar extends HTMLElement {
    logo = '';
    iconhome = '';
    iconmessenger = '';
    iconexplore = '';
    iconadd = '';
    iconlike = '';

    static get observedAttributes(): NavbarAttributes[] {
        return Object.keys(NavbarAttributes) as NavbarAttributes[];
    }

    attributeChangedCallback(prop: NavbarAttributes, _: string, newValue: string): void {
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
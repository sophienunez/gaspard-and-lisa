class MyTinder extends HTMLElement {
    static get observedAttributes() {
        return ['name', 'distance', 'age', 'photo', 'city', 'like', 'dislike'];
    }


    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onButtonClickedDislike = this.onButtonClickedDislike.bind(this);
    }

    connectedCallBack() {
        this.render();
        this.mount();
        this.mountDislike();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
        this.mount();
        this.mountDislike();
    }

    disconnectedCallback() {
        this.removeEventListeners();
    }

    mount() {
        this.render();
        this.addEventListeners();
    }

    mountDislike() {
        this.render();
        this.addEventListeners();
    }

    addEventListeners() {
        this.shadowRoot
            .querySelector(".no")
            .addEventListener("click", this.onButtonClicked);

        this.shadowRoot
            .querySelector(".heart")
            .addEventListener("click", this.onButtonClickedDislike);
    }

    render() {
        this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="/src/components/tinder/tinder.css"/>
    <div class="container">
    <div class="content">
        <div class="logo">
            <img class="icon" src="images/tinder.png" alt=""/>
        </div>
        <div class="card">
            <div class="user">
               <img class="user" src=${this.photo} alt=""/>
               <div class="profile">
                   <div class="name"> ${this.name}<span>, ${this.age}</span></div>
                   <div class="local"> ${this.distance} from here</div>
                   <div class="city"> <span> ${this.city}</span></div>
               </div>
            </div>
        </div>
        <div class="buttons">
          <div class="like">
            ${this.dislike || 0}
            <button type="button" class="heart">
                <span class="button_icon">
                  <ion-icon name="heart"></ion-icon>
                </span>
            </button>
          </div>
            <button type="button" class="star">
                <span class="button_icon">
                  <ion-icon name="star"></ion-icon>
                </span>
            </button>
          <div class="dislike">
            ${this.like || 0}
            <button type="button" class="no">
                <span class="button_icon">
                  <ion-icon name="close"></ion-icon>
                </span>
            </button>
          </div>
        </div>
    </div>
    </div>
    `;
    }

    removeEventListeners() {
        this.shadowRoot
            .querySelector(".no")
            .removeEventListener("click", this.onButtonClicked);

        this.shadowRoot
            .querySelector(".heart")
            .removeEventListener("click", this.onButtonClickedDislike);
    }

    onButtonClicked() {
        const currentValue = Number(this.getAttribute("like")) || 0;
        this.setAttribute("like", currentValue + 1);
    }

    onButtonClickedDislike() {
        const currentValueDislike = Number(this.getAttribute("dislike")) || 0;
        this.setAttribute("dislike", currentValueDislike + 1);
    }

}

customElements.define('my-tinder', MyTinder);
export default MyTinder;
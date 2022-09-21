enum PublicacionesAttributes {
    profilepic = 'profilepic',
    username = 'username',
    option = 'option',
    like = 'like',
    comment = 'comment',
    send = 'send',
    save = 'save',
    likecount = 'likecount',
    description = 'description',
    postime = 'postime',
    iconsmile = 'iconsmile',
}

class Publicaciones extends HTMLElement {
    profilepic = '';
    username = '';
    option = '';
    like = '';
    comment = '';
    send = '';
    save = '';
    likecount = '';
    description = '';
    postime = '';
    iconsmile = '';

    static get observedAttributes(): PublicacionesAttributes[] {
        return Object.keys(PublicacionesAttributes) as PublicacionesAttributes[];
    }

    attributeChangedCallback(prop: PublicacionesAttributes, _: string, newValue: string): void {
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
        <div class="post">
                    <div class="info">
                        <div class="user">
                            <div class="profile-pic normal"><img src="${this.profilepic}" alt=""></div>
                            <p class="username">${this.username}</p>
                        </div>
                        <img src="${this.option}" alt="" class="options">
                    </div>
                    <img src="${this.profilepic}" alt="" class="post-image">
                    <div class="post-content">
                        <div class="reaction-wrapper">
                            <img src="${this.like}" class="icon" alt="">
                            <img src="${this.comment}" class="icon" alt="">
                            <img src="${this.send}" class="icon" alt="">
                            <img src="${this.save}" class="save icon" alt="">
                        </div>
                        <p class="likes">${this.likecount} likes</p>
                        <p class="description"><span>${this.username} </span> ${this.description}</p>
                        <p class="post-time">${this.postime} ago</p>
                    </div>
                    <div class="comment-wrapper">
                        <img src="${this.iconsmile}" class="icon" alt="">
                        <input type="text" class="comment-box" placeholder="Add a comment">
                        <button class="comment-btn">post</button>
                    </div>
                </div>
        `;
    }
}

customElements.define("my-publicaciones", Publicaciones);
export default Publicaciones;
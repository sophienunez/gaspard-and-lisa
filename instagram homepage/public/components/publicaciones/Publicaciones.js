var PublicacionesAttributes;
(function (PublicacionesAttributes) {
    PublicacionesAttributes["profilepic"] = "profilepic";
    PublicacionesAttributes["username"] = "username";
    PublicacionesAttributes["option"] = "option";
    PublicacionesAttributes["like"] = "like";
    PublicacionesAttributes["comment"] = "comment";
    PublicacionesAttributes["send"] = "send";
    PublicacionesAttributes["save"] = "save";
    PublicacionesAttributes["likecount"] = "likecount";
    PublicacionesAttributes["description"] = "description";
    PublicacionesAttributes["postime"] = "postime";
    PublicacionesAttributes["iconsmile"] = "iconsmile";
})(PublicacionesAttributes || (PublicacionesAttributes = {}));
class Publicaciones extends HTMLElement {
    constructor() {
        super();
        this.profilepic = '';
        this.username = '';
        this.option = '';
        this.like = '';
        this.comment = '';
        this.send = '';
        this.save = '';
        this.likecount = '';
        this.description = '';
        this.postime = '';
        this.iconsmile = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(PublicacionesAttributes);
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

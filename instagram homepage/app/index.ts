import './components/index.js';

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode : 'open'})
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/styles.css"/>
        <my-navbar logo="./img/logo.PNG", iconhome="./img/home.PNG", iconmessenger="./img/messenger.PNG", iconexplore="./img/explore.PNG", iconadd="./img/add.PNG", iconlike="./img/like.PNG"></my-navbar>

        <section class="main">
        <div class="wrapper">

         <div class="left-col">
         <div class="status-wrapper">
         <my-status profilepic="./img/cover 1.jpeg", username="soko_the_cat"></my-status>
         <my-status profilepic="./img/cover 2.jpeg", username="notuser.jpg"></my-status>
         <my-status profilepic="./img/cover 8.jpeg", username="im_not_sam"></my-status>
         <my-status profilepic="./img/cover 3.jpeg", username="sally56"></my-status>
         <my-status profilepic="./img/cover 4.jpeg", username="_barb_8"></my-status>
         <my-status profilepic="./img/cover 5.jpeg", username="andresrojashere"></my-status>
         <my-status profilepic="./img/cover 6.jpeg", username="sophie_nxz"></my-status>
        </div>
         <my-publicaciones profilepic="./img/cover 1.jpeg", username="soko_the_cat", option="./img/option.PNG", like="./img/like.PNG", comment="./img/comment.PNG", send="./img/send.PNG", save="./img/save.PNG", likecount="5,6k", iconsmile="./img/smile.PNG", description="Red; apples blood tomato fire love anger", postime="5 minutes"></my-publicaciones>
         <my-publicaciones profilepic="./img/cover 2.jpeg", username="notuser.jpg", option="./img/option.PNG", like="./img/like.PNG", comment="./img/comment.PNG", send="./img/send.PNG", save="./img/save.PNG", likecount="6,2k", iconsmile="./img/smile.PNG", description="Hi, hey, hello", postime="6 minutes"></my-publicaciones>
         <my-publicaciones profilepic="./img/cover 8.jpeg", username="im_not_sam", option="./img/option.PNG", like="./img/like.PNG", comment="./img/comment.PNG", send="./img/send.PNG", save="./img/save.PNG", likecount="2,5k", iconsmile="./img/smile.PNG", description="Stars are not really that far", postime="6 minutes"></my-publicaciones>
         </div>

         <div class="right-col">
         <my-profile profilepic="./img/cover 6.jpeg", username="sophie_nxz", subtext="Sophie Nuñez"></my-profile>
         <p class="suggestion-text">Suggestions for you</p>
         <my-suggestions profilepic="./img/cover 9.jpeg", username="liquor_lips", otheruser="andresrojassshere"></my-suggestions>
         <my-suggestions profilepic="./img/cover 7.jpeg", username="it's_milky", otheruser="andresrojassshere"></my-suggestions>
         <my-suggestions profilepic="./img/cover 10.jpeg", username="starry_sophie", otheruser="andresrojassshere"></my-suggestions>
         <my-suggestions profilepic="./img/cover 11.jpeg", username="6joseph6", otheruser="andresrojassshere"></my-suggestions>
         </div>

        </div>
        </section>
        `;
    }
}

customElements.define('app-container', AppContainer)
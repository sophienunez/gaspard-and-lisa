import * as components from "./components/index.js"
class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-tinder name="Natalie Portman" age="19" distance="5km" city="London, England" photo="./images/sophie.jpeg"></my-tinder>

        <my-tinder name="Zoudi Witness" age="21" distance="62km" city="Berlin, Germany" photo="./images/robot.jpeg"></my-tinder>
        `
    }
}

customElements.define("app-container",AppContainer);
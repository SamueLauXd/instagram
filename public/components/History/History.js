import data from "../../data.js";
export var History;
(function (History) {
    History["imageprofile"] = "imageprofile";
    History["nameuser"] = "nameuser";
})(History || (History = {}));
class MyHistory extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            imageprofile: null,
            nameuser: null,
        };
        return Object.keys(attrs);
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const barra = data.map((History) => `
            <section>       
                <img class="profile" src="${History.imageprofile}"/>
                <h1 class="name">${History.nameuser}</h1>
            </section>
        `);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/History/style.css"
            <section class="stories">
                ${barra.join("")}
                </section>
            `;
        }
    }
}
customElements.define("my-history", MyHistory);
export default MyHistory;

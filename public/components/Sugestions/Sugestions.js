export var Sugestions;
(function (Sugestions) {
    Sugestions["imageprofile"] = "imageprofile";
    Sugestions["nameuser"] = "nameuser";
})(Sugestions || (Sugestions = {}));
class MySugestions extends HTMLElement {
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
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href=" ./components/Sugestions/style.css"
            <section>
                <div class="sugestions">
                    <image class="profile" src="${this.imageprofile}"></image>
                    <h1 class="name">${this.nameuser}</h1>
                    <h1 class="status">Seguir</h1>
                    <h1 class="new">Sugerencia para ti</h1>
                </div>
            </section>
            `;
        }
    }
}
customElements.define("my-sugestions", MySugestions);
export default MySugestions;

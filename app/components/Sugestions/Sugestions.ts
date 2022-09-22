export enum Sugestions {
    "imageprofile" = "imageprofile",
    "nameuser" = "nameuser"
}

class MySugestions extends HTMLElement {
    imageprofile?: string;
    nameuser?: string;

    static get observedAttributes(){
        const attrs: Record<Sugestions,null> = {
            imageprofile: null,
            nameuser: null,
        };
        return Object.keys(attrs);
    }
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    attributeChangedCallback(
        propName: Sugestions, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
            switch (propName) {
            
                default:
                    this[propName] = newValue;
                    break;
            }

            this.render();
    }

    connectedCallback(){
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
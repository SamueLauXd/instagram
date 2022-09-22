import data from "../../data.js";


export enum History {
    "imageprofile" = "imageprofile",
    "nameuser" = "nameuser"
}

class MyHistory extends HTMLElement {
    imageprofile?: string;
    nameuser?: string;

    static get observedAttributes(){
        const attrs: Record<History,null> = {
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
        propName: History, 
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

    render(){


        const barra = data.map((History) => `
            <section>       
                <img class="profile" src="${History.imageprofile}"/>
                <h1 class="name">${History.nameuser}</h1>
            </section>
        `);

        if(this.shadowRoot){
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
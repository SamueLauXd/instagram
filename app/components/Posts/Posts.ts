export enum Posts {
    "imageprofile" = "imageprofile",
    "nameuser" = "nameuser",
    "imagecontent" = "imagecontent",
    "likes" = "likes",
    "comentuser1" = "comentuser1",
    "comentuser2" = "comentuser2",
    "viewcoments" = "viewcoments",
    "days" = "days"
}

class MyPost extends HTMLElement {
    imageprofile?: string;
    nameuser?: string;
    imagecontent?: string;
    likes?: string;
    comentuser1?: string;
    comentuser2?: string;
    viewcoments?: string;
    days?: string;

    static get observedAttributes(){
        const attrs: Record<Posts,null> = {
            imageprofile: null,
            nameuser: null,
            imagecontent: null,
            likes: null,
            comentuser1: null,
            comentuser2: null,
            viewcoments: null,
            days: null
        };
        return Object.keys(attrs);
    }
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    attributeChangedCallback(
        propName: Posts, 
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
            <link rel="stylesheet" href=" ./components/Posts/style.css"
            <section>
                <div class="post">
                    <image class="profile" src="${this.imageprofile}"></image>
                    <h1 class="name">${this.nameuser}</h1>
                    <image class="publication" src="${this.imagecontent}"></image>
                    <image class="like" src="./assets/heart.png"></image>
                    <image class="coment" src="./assets/chat-bubble.png"></image>
                    <image class="save" src="./assets/save-instagram.png"></image>
                    <image class="options" src="./assets/more-dots.png"></image>
                    <image class="send" src="./assets/send.png"></image>
                    <h1 class="likes">${this.likes}</h1>
                    <h1 class="user1"><b>${this.comentuser1}:</b> ${this.comentuser2}</h1>
                    <h1 class="viewcoments">${this.viewcoments}</h1>
                    <h1 class="days">${this.days}</h1>
                </div>
            </section>
            `;
        }
    }
}

customElements.define("my-post", MyPost);
export default MyPost;
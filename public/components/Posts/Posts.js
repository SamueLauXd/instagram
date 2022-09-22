export var Posts;
(function (Posts) {
    Posts["imageprofile"] = "imageprofile";
    Posts["nameuser"] = "nameuser";
    Posts["imagecontent"] = "imagecontent";
    Posts["likes"] = "likes";
    Posts["comentuser1"] = "comentuser1";
    Posts["comentuser2"] = "comentuser2";
    Posts["viewcoments"] = "viewcoments";
    Posts["days"] = "days";
})(Posts || (Posts = {}));
class MyPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
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

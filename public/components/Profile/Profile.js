export var Attribute;
(function (Attribute) {
    Attribute["imageprofile"] = "imageprofile";
    Attribute["nameuser"] = "nameuser";
    Attribute["location"] = "location";
    Attribute["imagecontent"] = "imagecontent";
    Attribute["likes"] = "likes";
    Attribute["comentuser1"] = "comentuser1";
    Attribute["comentuser2"] = "comentuser2";
    Attribute["viewcoments"] = "viewcoments";
    Attribute["days"] = "days";
})(Attribute || (Attribute = {}));
class MyProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            imageprofile: null,
            nameuser: null,
            location: null,
            imagecontent: null,
            likes: null,
            comentuser1: null,
            comentuser2: null,
            viewcoments: null,
            days: null,
        };
        return Object.keys(attrs); // return ["age","lastname","name"]
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Profile/style.css"
            <section class="cartapost">
            <img class="perfil"src="${this.imageprofile}"></img>
              <h1 class="nameuser">${this.nameuser}</h1>
              <h1 class="location ">${this.location}</h1>
              <image class="contenido"src="${this.imagecontent}"></image> 
              <h1 class="like"><b>${this.likes} Likes</b></h1>
              <h1 class="comentuser"><b>${this.comentuser1}</b> ${this.comentuser2}</h1>
              <h1 class="views">${this.viewcoments}</h1>
              <h1 class="day">${this.days}</h1>


            <image class="points"src="./Images/Post/botones/3points.png"></image>
              <image class="Corazon" src="./Images/Post/botones/like.png"></image>
              <image class="compartir" src="./Images/Post/botones/Share.png"></image>
              <image class="coment" src="./Images/Post/botones/Comments.png"></image>
              <image class="guardar" src="./Images/Post/botones/Save.png"></image>
              <image class="cont" src="./Images/Post/botones/contenido.jpg"></image>

              
          </section>
            `;
        }
    }
}
customElements.define("my-profile", MyProfile);
export default MyProfile;

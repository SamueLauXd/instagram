import data from "./data.js"
import "./components/index.js";
import MyProfile, {Attribute} from "./components/Profile/Profile.js";
import MyNavigation from "./components/Navigation/Navigation.js";
import MyHistory from "./components/History/History.js";
import MyPost from "./components/Posts/Posts.js";
import MyUser from "./components/User/User.js";
import MySugestions from "./components/Sugestions/Sugestions.js";

class AppContainer extends HTMLElement {
    navigation: MyNavigation[] = [];
    history: MyHistory[] = [];
    post: MyPost[] = [];
    user: MyUser[] = [];
    sugestions: MySugestions[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        const navigation = this.ownerDocument.createElement("my-navigation") as MyNavigation;
        this.navigation.push(navigation);

        const user = this.ownerDocument.createElement("my-user") as MyUser;
        this.user.push(user);

        const history = this.ownerDocument.createElement("my-history") as MyHistory;
        this.history.push(history);

        /*
        data.forEach((user)=>{
            const history = this.ownerDocument.createElement("my-history") as MyHistory;
            history.setAttribute(Attribute.nameuser, user.nameuser);
            history.setAttribute(Attribute.imageprofile, user.imageprofile);
            this.history.push(history);
        })
        */

        data.forEach((user)=>{
            const post = this.ownerDocument.createElement("my-post") as MyPost;
            post.setAttribute(Attribute.nameuser, user.nameuser);
            post.setAttribute(Attribute.imageprofile, user.imageprofile);
            post.setAttribute(Attribute.imagecontent, user.imagecontent);
            post.setAttribute(Attribute.likes, user.likes);
            post.setAttribute(Attribute.comentuser1, user.comentuser1);
            post.setAttribute(Attribute.comentuser2, user.comentuser2);
            post.setAttribute(Attribute.viewcoments, user.viewcoments);
            post.setAttribute(Attribute.days, user.days);
            this.post.push(post);
        })

        data.forEach((user)=>{
            const sugestions = this.ownerDocument.createElement("my-sugestions") as MySugestions;
            sugestions.setAttribute(Attribute.nameuser, user.nameuser);
            sugestions.setAttribute(Attribute.imageprofile, user.imageprofile);
            this.sugestions.push(sugestions);
        })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = "";

            this.navigation.forEach((navigation)=>{
                this.shadowRoot?.appendChild(navigation);
            });

            this.history.forEach((history)=>{
                this.shadowRoot?.appendChild(history);
            })

            this.post.forEach((post)=>{
                this.shadowRoot?.appendChild(post);
            })

            this.user.forEach((user)=>{
                this.shadowRoot?.appendChild(user);
            })

            this.sugestions.forEach((sugestions)=>{
                this.shadowRoot?.appendChild(sugestions);
            })
        }
    }
}

customElements.define("app-container", AppContainer);
import data from "./data.js";
import "./components/index.js";
import { Attribute } from "./components/Profile/Profile.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.navigation = [];
        this.history = [];
        this.post = [];
        this.user = [];
        this.sugestions = [];
        this.attachShadow({ mode: "open" });
        const navigation = this.ownerDocument.createElement("my-navigation");
        this.navigation.push(navigation);
        const user = this.ownerDocument.createElement("my-user");
        this.user.push(user);
        const history = this.ownerDocument.createElement("my-history");
        this.history.push(history);
        /*
        data.forEach((user)=>{
            const history = this.ownerDocument.createElement("my-history") as MyHistory;
            history.setAttribute(Attribute.nameuser, user.nameuser);
            history.setAttribute(Attribute.imageprofile, user.imageprofile);
            this.history.push(history);
        })
        */
        data.forEach((user) => {
            const post = this.ownerDocument.createElement("my-post");
            post.setAttribute(Attribute.nameuser, user.nameuser);
            post.setAttribute(Attribute.imageprofile, user.imageprofile);
            post.setAttribute(Attribute.imagecontent, user.imagecontent);
            post.setAttribute(Attribute.likes, user.likes);
            post.setAttribute(Attribute.comentuser1, user.comentuser1);
            post.setAttribute(Attribute.comentuser2, user.comentuser2);
            post.setAttribute(Attribute.viewcoments, user.viewcoments);
            post.setAttribute(Attribute.days, user.days);
            this.post.push(post);
        });
        data.forEach((user) => {
            const sugestions = this.ownerDocument.createElement("my-sugestions");
            sugestions.setAttribute(Attribute.nameuser, user.nameuser);
            sugestions.setAttribute(Attribute.imageprofile, user.imageprofile);
            this.sugestions.push(sugestions);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
            this.navigation.forEach((navigation) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(navigation);
            });
            this.history.forEach((history) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(history);
            });
            this.post.forEach((post) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(post);
            });
            this.user.forEach((user) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(user);
            });
            this.sugestions.forEach((sugestions) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(sugestions);
            });
        }
    }
}
customElements.define("app-container", AppContainer);

class MyNavigation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href=" ./components/Navigation/style.css"
            <section>
                <div class="navegacion">
                    <img class="logo" src="./assets/insta-tipo.png"></img>
                    <img class="home" src="./assets/home.png"></img>
                    <img class="heart" src="./assets/heart.png"></img>
                    <img class="messages" src="./assets/messenger.png"></img>
                    <img class="more" src="./assets/more.png"></img>
                    <img class="explore" src="./assets/explore.png"></img>
                    <img class="profile" src="./assets/3.jpg"></img>
                    <input class="searchbox" type="search" placeholder="Buscar">
                </div>
            </section>
            `;
        }
    }
}
customElements.define("my-navigation", MyNavigation);
export default MyNavigation;

class MyUser extends HTMLElement {
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
            <link rel="stylesheet" href=" ./components/User/style.css"
            <section>
                <div class="usercontainer">
                    <img class="profile" src="./assets/3.jpg"></img>
                    <h1 class="user">selfmadesamuel</h1>
                    <h1 class="name">Samuel Ortiz</h1>
                    <h1 class="status">Cambiar</h1>
                    <h1 class="sugest">Sugerencias para ti</h1>
                    <h1 class="seeall">Ver todo</h1>
                </div>
            </section>
            `;
        }
    }
}
customElements.define("my-user", MyUser);
export default MyUser;

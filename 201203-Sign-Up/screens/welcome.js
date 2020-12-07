const style = `
<style>
.welcome-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  background: url("./assets/background-alps.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
}

#welcome-form {
  width: 30%;
  background: #fff;
  height: 100vh;
  padding: 0px 20px;
}

#redirect-container {
  margin-top: 15px;
}

#redirect {
  color: black;
  text-decoration: underline;
}

#redirect:hover {
  color: blue;
  cursor: pointer
}

</style>
`
import { redirect } from "../index.js"
class WelcomeScreen extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${style}
  <div class="welcome-container">
    <form id="welcome-form">
      <h1>Welcome!</h1>
      <p id="redirect-container">Click <a id="redirect">here</a> to log out.</p>
    </form>
  </div>
      `

    this._shadowRoot
      .getElementById("redirect")
      .addEventListener("click", () => {
        localStorage.setItem("email", "")
        localStorage.setItem("password", "")
        redirect("login")
      })
  }
}

window.customElements.define("welcome-screen", WelcomeScreen)

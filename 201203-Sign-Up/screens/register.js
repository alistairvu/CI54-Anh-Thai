const style = `
<style>
.register-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  background: url("./assets/background-alps.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
}

#register-form {
  width: 30%;
  background: #fff;
  height: 100vh;
}

h1 {
  text-align: center;
  color: #333;
}
</style>
`

class RegisterScreen extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${style}
    <div class="register-container">
      <form id="register-form">
        <h1>SIGN UP</h1>
      </form>
    </div>
      `
  }
}

window.customElements.define("register-screen", RegisterScreen)

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
      <input-wrapper id="first-name" type="text" placeholder="First name" error=""></input-wrapper>
      <input-wrapper id="last-name" type="text" placeholder="Last name" error=""/></input-wrapper> 
      <input-wrapper id="email" type="email" placeholder="Email" error=""/></input-wrapper>
      <input-wrapper id="password" type="password" placeholder="Password" error=""/></input-wrapper>
      <input-wrapper id="confirm-password" type="password" placeholder="Confirm password" error=""/></input-wrapper>
      <button type="submit">Sign up</button>
    </form>
  </div>
      `

    const registerForm = this._shadowRoot.getElementById("register-form")
    const collection = firebase.firestore().collection("users")

    registerForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const firstName = this._shadowRoot.getElementById("first-name").value
      const lastName = this._shadowRoot.getElementById("last-name").value
      const email = this._shadowRoot.getElementById("email").value
      const password = this._shadowRoot.getElementById("password").value
      const confirmPassword = this._shadowRoot.getElementById(
        "confirm-password"
      ).value

      if (
        firstName.length == 0 ||
        lastName.length == 0 ||
        email.length == 0 ||
        password.length == 0 ||
        confirmPassword.length == 0
      ) {
        alert("Please fill in all fields!")
        return
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match!")
        return
      }

      const newUser = {
        name: `${firstName} ${lastName}`,
        email: email,
        password: CryptoJS.MD5(password).toString(CryptoJS.enc.Base64),
      }
      console.log(newUser)
      collection.add(newUser)
    })
  }
}

window.customElements.define("register-screen", RegisterScreen)

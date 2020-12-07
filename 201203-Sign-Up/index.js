import "./screens/register.js"
import "./screens/login.js"
import "./components/inputWrapper.js"
const rootElement = document.getElementById("root")

rootElement.innerHTML = `
<register-screen></register-screen>
`

const redirect = (screenName) => {
  switch (screenName) {
    case "register":
      rootElement.innerHTML = `<register-screen></register-screen>`
      break
    case "login":
      rootElement.innerHTML = `<login-screen></login-screen>`
      break
    default:
      break
  }
}

export { redirect }

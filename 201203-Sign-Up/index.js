import "./screens/register.js"
import "./screens/login.js"
import "./screens/welcome.js"
import "./components/inputWrapper.js"
const rootElement = document.getElementById("root")

export const redirect = (screenName) => {
  switch (screenName) {
    case "register":
      rootElement.innerHTML = `<register-screen></register-screen>`
      break
    case "login":
      rootElement.innerHTML = `<login-screen></login-screen>`
      break
    case "welcome":
      rootElement.innerHTML = `<welcome-screen></welcome-screen>`
      break
    default:
      break
  }
}

rootElement.innerHTML = `
        <login-screen></login-screen>
        `

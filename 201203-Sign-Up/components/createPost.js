import { getItemLocalStorage } from "../utils.js"
const collection = firebase.firestore().collection("posts")

class CreatePost extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    <form id="create-post">
      <textarea name="content" rows="4" id="content"/></textarea>
      <button id="post-btn">Post</button>
    </form>
      `

    const postButton = this._shadowRoot.getElementById("post-btn")
    const postContent = this._shadowRoot.getElementById("content")

    postButton.addEventListener("click", () => {
      const userData = getItemLocalStorage("userData")
      const time = new Date()
      const postData = {
        createdAt: time.toISOString(),
        createdBy: userData.id,
        createdName: userData.name,
        content: postContent.value,
        isShown: true,
      }
      collection.add(postData)
      alert("Post added!")
    })
  }
}

window.customElements.define("create-post", CreatePost)

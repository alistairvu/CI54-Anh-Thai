import { getItemLocalStorage } from "../utils.js"
const collection = firebase.firestore().collection("posts")

const styles = `
  #create-post {
    width: 60%;
    margin: auto;
    margin-top: 20px;
    text-align: right;
  }

  #create-post textarea {
    width: 100%;
    border 1px solid #dbdbdb;
    border-radius: 10px;
    resize: none;
    outline: none;
  }

  .post {
    background-color: #5e8ac2;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
  }
`

class CreatePost extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    <style>
    ${styles}
    </style>
    <form id="create-post" style="width: 60%; text-align:center; margin: auto; margin-top: 20px;">
      <textarea name="content" rows="6" id="content"/></textarea>
      <button class="post" id="post-btn">Post</button>
    </form>
      `

    const postButton = this._shadowRoot.getElementById("post-btn")
    const postContent = this._shadowRoot.getElementById("content")

    postButton.addEventListener("click", () => {
      if (postContent.value.length > 0) {
        const userData = getItemLocalStorage("currentUser")
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
      } else {
        alert("Post empty!")
      }
    })
  }
}

window.customElements.define("create-post", CreatePost)

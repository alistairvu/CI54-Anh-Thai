class InputWrapper extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.type = this.getAttribute("type")
    this.placeholder = this.getAttribute("placeholder")
    this.error = this.getAttribute("error")
    const { type, placeholder, error } = this

    this._shadowRoot.innerHTML = `
    <div>
      <input id="input-main" type="${type}" placeholder="${placeholder}"/>
      <div class="error">${error.length > 0 ? error : ""}</div>
    </div>
  `
  }

  get value() {
    return this._shadowRoot.getElementById("input-main").value
  }
}

window.customElements.define("input-wrapper", InputWrapper)

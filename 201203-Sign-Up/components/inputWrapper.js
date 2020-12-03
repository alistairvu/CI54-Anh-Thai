class InputWrapper extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.type = this.getAttribute("type")
    this.placeholder = this.getAttribute("placeholder")
    const { type, placeholder } = this

    this._shadowRoot.innerHTML = `
    <div>
      <input type="${type}" placeholder="${placeholder}"/>
    </div>
  `
  }
}

window.customElements.define("input-wrapper", InputWrapper)

class StudentItem extends HTMLElement {
  constructor() {
    super()

    this._shadowDOM = this.attachShadow({ mode: "open" })
  }
  // called when a component is added
  connectedCallback() {
    this.name = this.getAttribute("name")

    this._shadowDOM.innerHTML = `
    <div>
      ${this.name}
    </div>
    `
  }
  // called when a component is removed
  disconnectedCallback() {
    console.log(`${this.name} has been removed.`)
  }
  // change of which attribute is listened
  static get observedAttributes() {
    return ["name"]
  }
  // called when a component is changed
  attributeChangeCallback(name, newVal, oldVal) {
    console.log(`new value ${newVal}`)
    console.log(`old value ${oldVal}`)
    console.log(`attribute ${name}`)
  }
}

window.customElements.define("student-item", StudentItem)

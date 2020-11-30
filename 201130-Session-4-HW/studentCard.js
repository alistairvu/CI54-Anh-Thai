import "./studentCard.js"

const styles = `
<style>
.card {
  width: 10rem;
  padding: 0.5rem;
  border: 1px solid black;
  flex: 1 0 30%;
}

.name {
  font-size: 2rem;
  font-weight: 600;
}
</style>
`

class StudentCard extends HTMLElement {
  constructor() {
    super()
    this._shadowDOM = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.name = this.getAttribute("name")
    this.id = this.getAttribute("id")
    this.age = this.getAttribute("age")
    this.city = this.getAttribute("city")

    this._shadowDOM.innerHTML = `
      ${styles}
      <div class="card">
        <p class="name">${this.name}</p>
        <div class="body">
          <p>(ID: ${this.id})</p>
          <p>Age: ${this.age}</p>
          <p>City: ${this.city}</p>
        </div>
      </div>
  `
  }
}

window.customElements.define("student-card", StudentCard)

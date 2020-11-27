const styles = `
<style>
  .card {
    padding: 10px;
    border: 1px #dbdbdb solid;
    font-family: Arial, sans-serif;
  }

  .name {
    font-size: 1.5rem;
    font-weight: 600;
  }
</style>
`

class StudentCard extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "open" })

    this.name = this.getAttribute("name")
    this.age = this.getAttribute("age")
    this.placeOfBirth = this.getAttribute("placeOfBirth")
    const { name, age, placeOfBirth } = this

    this.shadow.innerHTML = `
    ${styles}
    <div class="card">
      <div class="name">${name}</div>
      <div>Age: ${age}</div>
      <div>Place of Birth: ${placeOfBirth}</div>
    </div>
    `
  }
}

window.customElements.define("student-card", StudentCard)

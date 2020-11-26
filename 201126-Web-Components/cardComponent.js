const style = `
<style>
  .card {
    font-family: sans-serif;
    border: 0.5px solid #dbdbdb;
    margin-right: 20px;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .card img {
    width: 200px
  }

  .card-body {
    width: 180px;
    padding-right: 20px;
  }
</style>
`

class CardComponent extends HTMLElement {
  constructor() {
    super()
    // declare a shadowDOM
    this._shadowDOM = this.attachShadow({ mode: "open" })

    this.imgSrc = this.getAttribute("imgSrc")
    this.title = this.getAttribute("title")
    this.description = this.getAttribute("description")
    const { imgSrc, title, description } = this

    this._shadowDOM.innerHTML = `
    ${style}
    <div class="card">
      <img src=${imgSrc} alt="${title} Artwork"/>
      <div class="card-body">
        <div class="title">${title}</div>
        <div class="description">${description}</div>
      </div>
    </div>
    `
  }
}

window.customElements.define("card-container", CardComponent)

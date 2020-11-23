class User {
  name
  age
  gender
  description
  image

  constructor(name, age, gender, description, image) {
    this.name = name
    this.age = age
    this.gender = gender
    this.description = description
    this.image = image
  }

  like() {}

  unlike() {}

  update(name, age, gender, description, image) {
    this.name = name
    this.age = age
    this.gender = gender
    this.description = description
    this.image = image
  }

  toHTML() {
    return `
      <div class="user-container">
        <img src="${this.image}" alt="Image of user"></img>
        <div class="info">
          Name: ${this.name}
          Age: ${this.age}
          ${this.description}
        </div>
      </div>
    `
  }
}

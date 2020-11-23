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
    try {
      return `
      <div class="user-container">
        <div class="previous" onClick="userCollection.previous()">
          <
        </div>
        <img src="${this.image}" alt="${this.description}"></img>
        <div class="info">
          Name: ${this.name} <br />
          Age: ${this.age} <br />
          ${this.description}
        </div>
        <div class="next" onClick="userCollection.next()">
          >
        </div>
      </div>
    `
    } catch (e) {
      console.error(e)
    }
  }
}

// A collection of users
class UserCollection {
  userList
  current

  constructor() {
    this.userList = []
    this.current = 0
  }

  addUser(user) {
    this.userList.push(user)
  }

  removeUser(index) {
    this.userList.splice(index, 1)
  }

  show() {
    document.querySelector("#app").innerHTML = this.userList[
      this.current
    ].toHTML()
  }

  previous() {
    if (this.current > 0) {
      this.current--
      this.show()
    } else {
      alert("No more users!")
    }
  }

  next() {
    if (this.current < this.userList.length - 1) {
      this.current++
      this.show()
    } else {
      alert("No more users!")
    }
  }
}

const userCollection = new UserCollection()

const user1 = new User(
  "HeeJin",
  2020 - 2000 + 1,
  "female",
  "Solo: ViViD",
  "https://via.placeholder.com/150/ec008c"
)
userCollection.addUser(user1)

const user2 = new User(
  "HyunJin",
  2020 - 2000 + 1,
  "female",
  "Solo: Around You",
  "https://via.placeholder.com/150/fed103"
)
userCollection.addUser(user2)

const user3 = new User(
  "HaSeul",
  2020 - 1997 + 1,
  "female",
  "Solo: Let Me In",
  "https://via.placeholder.com/150/00a651"
)
userCollection.addUser(user3)

const user4 = new User(
  "YeoJin",
  2020 - 2002 + 1,
  "female",
  "Solo: Kiss Later",
  "https://via.placeholder.com/150/f76e1d"
)
userCollection.addUser(user4)

const user5 = new User(
  "ViVi",
  2020 - 1996 + 1,
  "female",
  "Solo: Everyday I Love You",
  "https://via.placeholder.com/150/ff9ab5"
)
userCollection.addUser(user5)

userCollection.show()

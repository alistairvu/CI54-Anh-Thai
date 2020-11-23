class Person {
  name
  age
  address
  gender

  constructor(name, age, address, gender) {
    this.name = name
    this.age = age
    this.address = address
    this.gender = gender
  }

  intro() {
    const pronouns =
      this.gender === "male"
        ? "he/him"
        : this.gender === "female"
        ? "she/her"
        : "they/them"
    console.log(`Hello, my name is ${
      this.name
    }, and my pronouns are ${pronouns}. 
I am ${this.age} ${this.age === 1 ? "year" : "years"} old.
I am currently based in ${this.address}.
    `)
  }
}

const yuju = new Person("Yuju", 20, "Hanoi", "female")
// const abc = new Person("abc", 3, "Hanoi", "male")
console.log(yuju)
yuju.intro()

// Static methods

class MyMath {
  static sum(a, b) {
    return a + b
  }

  static div(a, b) {
    return a / b
  }
}

// console.log(MyMath.sum(1, 2))

// class inheritance
class Employee extends Person {
  constructor(name, age, address, gender, salary) {
    super(name, age, address, gender)
    this.salary = salary
  }

  intro() {
    this.name.toLowerCase() === "trump" &&
      console.log(
        "I WON THE ELECTION!!! JOE BIDEN STOLE THE ELECTION FROM ME!!!!!!!"
      )
  }

  showOff() {
    this.name.toLowerCase() === "irene"
      ? console.log("I'M A LITTLE MONSTER!!!!")
      : console.log(
          `I EARN $${this.salary} A YEAR JUST BY BREATHING!!!!!111!!!!`
        )
  }
}

const notMyPresident = new Employee("Trump", 76, "Washington", "male", 2)
console.log(notMyPresident)
notMyPresident.intro()
notMyPresident.showOff()
const irene = new Employee("Irene", 30, "Seoul", "female", 3)
irene.showOff()

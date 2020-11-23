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

class Student {
  name
  age
  placeOfBirth

  constructor(name, age, placeOfBirth) {
    this.name = name
    this.age = age
    this.placeOfBirth = placeOfBirth
  }

  showData() {
    console.log(`
Name: ${this.name}
Age: ${this.age}
Born in: ${this.placeOfBirth}\n`)
  }
}

export default Student

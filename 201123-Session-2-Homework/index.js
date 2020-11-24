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

class StudentClass {
  studentList

  constructor() {
    this.studentList = []
  }

  showClass() {
    this.studentList.map((student) => student.showData())
    console.log("----------")
  }

  addStudent(student) {
    this.studentList.push(student)
  }

  findFifteen() {
    this.studentList
      .filter((student) => student.age === 15)
      .map((student) => student.showData())
    console.log("----------")
  }

  findEighteenHanoi() {
    this.studentList
      .filter(
        (student) => student.age === 18 && student.placeOfBirth === "Hanoi"
      )
      .map((student) => student.showData())
    console.log("----------")
  }

  findName(name) {
    this.studentList
      .filter((student) => student.name === name)
      .map((student) => student.showData())
    console.log("----------")
  }
}

// testing...
const myStudent1 = new Student("HeeJin", 15, "Seoul")
const myStudent2 = new Student("HyunJin", 15, "Seoul")
const myStudent3 = new Student("HaSeul", 18, "Hanoi")
const myStudent4 = new Student("ViVi", 23, "Hongkong")

const studentArr = [myStudent1, myStudent2, myStudent3, myStudent4]
const studentClass = new StudentClass()
studentArr.map((student) => studentClass.addStudent(student))

studentClass.showClass()
studentClass.findFifteen()
studentClass.findEighteenHanoi()
studentClass.findName("ViVi")

import Student from "./student.js"
import "./studentCard.js"

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
    if (student instanceof Student) {
      this.studentList.push(student)
    } else {
      console.log("Invalid input.")
    }
  }

  findAge(age) {
    this.studentList
      .filter((student) => student.age === age)
      .map((student) => student.showData())
    console.log("----------")
  }

  findAgeAndLocation(age, location) {
    this.studentList
      .filter(
        (student) => student.age === age && student.placeOfBirth === location
      )
      .map((student) => student.showData())
    console.log("----------")
  }

  findName(name) {
    this.studentList
      .filter((student) => student.name.includes(name))
      .map((student) => student.showData())
    console.log("----------")
  }

  displayStudents() {
    const rootElement = document.querySelector("#root")
    this.studentList.map((student) => {
      const { name, age, placeOfBirth } = student
      rootElement.innerHTML += `
  <student-card name=${name} age=${age} placeOfBirth=${placeOfBirth} />
  `
      console.log(`Added ${name}`)
    })
  }
}

export default StudentClass

import Student from "./student"

class StudentCollection {
  listStudent

  constructor() {
    this.listStudent = []
  }

  addStudent(student) {
    if (student instanceof Student) {
      this.listStudent.push(student)
    } else {
      console.log("Invalid object.")
    }
  }

  findStudentByAge(age) {
    this.listStudent
      .filter((student) => student.age === age)
      .map((student) => student.getInfo())
  }

  findStudentByAgeAndLocation(age, location) {
    this.listStudent
      .filter((student) => student.age === age && student.address === location)
      .map((student) => student.getInfo())
  }

  findStudentByName(name) {
    this.listStudent
      .filter((student) =>
        student.fullName.toLowerCase().contains(name.toLowerCase())
      )
      .map((student) => student.getInfo())
  }
}

export default StudentCollection

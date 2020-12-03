import Student from "./student.js"

export default class StudentCollection {
  studentList

  constructor() {
    this.studentList = []
  }

  addStudent() {
    const length = arguments.length
    for (let i = 0; i < length; i++) {
      const student = arguments[i]
      if (student instanceof Student) {
        this.studentList.push(student)
      }
    }
  }

  showStudentList() {
    let html = ``
    this.studentList.map((student) => {
      const { name, id, age, city } = student
      html += `<student-card name="${name}" id="${id}" age="${age}" city="${city}"></student-card>`
    })
    return html
  }
}

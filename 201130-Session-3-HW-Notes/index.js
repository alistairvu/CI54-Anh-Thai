import Student from "./student.js"
import StudentCollection from "./studentCollection.js"
import "./studentItem.js"
//
// testing...
const myStudent1 = new Student("HeeJin", 15, "Seoul")
const myStudent2 = new Student("HyunJin", 15, "Seoul")
const myStudent3 = new Student("HaSeul", 18, "Hanoi")
const myStudent4 = new Student("ViVi", 23, "Hongkong")

const studentArr = [myStudent1, myStudent2, myStudent3, myStudent4]
const studentClass = new StudentCollection()
studentArr.map((student) => studentClass.addStudent(student))

const appElement = document.getElementById("app")

let html = ``
for (const student of studentClass.studentList) {
  const { name } = student
  html += `<student-item name="${name}"></student-item>`
}
appElement.innerHTML = html

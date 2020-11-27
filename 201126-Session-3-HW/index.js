import Student from "./student.js"
import StudentClass from "./studentClass.js"
//
// testing...
const myStudent1 = new Student("HeeJin", 15, "Seoul")
const myStudent2 = new Student("HyunJin", 15, "Seoul")
const myStudent3 = new Student("HaSeul", 18, "Hanoi")
const myStudent4 = new Student("ViVi", 23, "Hongkong")

const studentArr = [myStudent1, myStudent2, myStudent3, myStudent4]
const studentClass = new StudentClass()
studentArr.map((student) => studentClass.addStudent(student))

studentClass.showClass()
studentClass.findAge(15)
studentClass.findAgeAndLocation(18, "Hanoi")
studentClass.findName("ViVi")
studentClass.displayStudents()

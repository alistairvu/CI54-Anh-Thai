import firebase from "./firebase.js"
import StudentCollection from "./studentCollection.js"
import "./studentCard.js"
import { getStudentFromData, getDataFromDocs } from "./utils.js"

const studentCollection = new StudentCollection()

const getStudent = async () => {
  const collection = await firebase.firestore().collection("students")
  const res = await collection.get()
  const docs = res.docs
  const data = getDataFromDocs(docs)

  data.map((element) => {
    const student = getStudentFromData(element)
    studentCollection.addStudent(student)
  })

  document.getElementById(
    "root"
  ).innerHTML = studentCollection.showStudentList()
}

getStudent()

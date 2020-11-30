import Student from "./student.js"

export const getStudentFromData = (data) => {
  const { name, id, age, city } = data
  return new Student(name, id, age, city)
}

export const getDataFromDocs = (docs) => {
  return docs.map((doc) => {
    const data = doc.data()
    data.id = doc.id
    return data
  })
}

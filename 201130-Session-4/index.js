import { getDataFromDocs } from "./utils.js"

// get one document
const getOneDocument = async () => {
  const collection = await firebase.firestore().collection("users")
  const res = await collection.doc("eLnHgEMI0Acbe7pUClxq").get()
  const user = await res.data()
  user.id = res.id
  console.log(user)
}

// get many documents
const getManyDocuments = async () => {
  const collection = await firebase.firestore().collection("users")
  const res = await collection.get()
  console.log(getDataFromDocs(res))
}

getManyDocuments()

// add an document
const addDocument = async (data) => {
  const collection = await firebase.firestore().collection("users")
  collection.add(data)
}

const formElement = document.getElementById("form")
formElement.addEventListener("submit", (e) => {
  e.preventDefault()
  const data = {}
  const elements = formElement.elements
  const length = elements.length

  for (let i = 0; i < length; i++) {
    const element = elements[i]
    if (element.name.length > 0) {
      if (element.type === "number") {
        data[element.name] = Number(element.value)
      } else {
        data[element.name] = element.value
      }
      element.value = ""
    }
  }

  addDocument(data)
  alert("Data added!")
})

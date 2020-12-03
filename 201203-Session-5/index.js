import firebase from "./firebase.js"

const collection = firebase.firestore().collection("students")

const getData = async () => {
  try {
    const res = await collection.get()
    const docs = res.docs
    const data = docs.map((doc) => {
      return { ...doc.data(), id: doc.id }
    })
    console.log(data)
  } catch (e) {
    console.error(e)
  }
}

getData()

const addDocument = () => {
  const data = {
    name: "test",
    age: 2020 - 2001 + 1,
    city: "Seoul / Budapest",
  }
  collection.doc("1013").set(data)
  // data will be given an id of 1012
}

addDocument()

const updateDocument = () => {
  collection.doc("1002").update({
    status: true,
  })
  // 1013.age === 25
}

updateDocument()

const incrementAge = () => {
  collection.doc("1013").update({
    age: firebase.firestore.FieldValue.increment(3),
  })
}

incrementAge()

const deleteDocument = () => {
  collection.doc("1013").delete()
  // 1013 will be deleted
}

deleteDocument()

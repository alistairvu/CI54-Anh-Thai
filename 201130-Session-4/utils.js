export const getDataFromDoc = (doc) => {
  const data = doc.data()
  data.id = doc.id
  return data
}

export const getDataFromDocs = (data) => {
  const docs = data.docs
  const listRes = docs.map((doc) => getDataFromDoc(doc))
  return listRes
}

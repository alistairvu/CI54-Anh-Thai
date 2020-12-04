export const getDataFromDoc = (doc) => {
  return { ...doc.data(), id: doc.id }
}

export const getDataFromDocs = (docs) => {
  return docs.map((doc) => getDataFromDoc(doc))
}

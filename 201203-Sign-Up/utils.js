export const getDataFromDoc = (doc) => {
  return { ...doc.data(), id: doc.id }
}

export const getDataFromDocs = (docs) => {
  return docs.map((doc) => getDataFromDoc(doc))
}

// /**
//  *
//  * @param {String} key
//  * @param {object} value
//  */
export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, value)
}

export const getItemLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

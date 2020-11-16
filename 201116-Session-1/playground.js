const fetch = require("node-fetch")
const url = "https://jsonplaceholder.typicode.com/users"

const getUser = async () => {
  const prom = await fetch(url)
  const data = prom.json()
  return data
}

getUser().then((data) => console.log(data))

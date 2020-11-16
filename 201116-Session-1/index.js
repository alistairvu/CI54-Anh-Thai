function compareLetVar() {
  if (true) {
    var b = 1
  }
  console.log(b)
}

compareLetVar()

const flower = `rose`
const poem = `A ${flower} by any other name would smell as sweet.`

console.log(poem.length)
console.log(poem)

const student = {
  name: `Nguyen Van A`,
  age: 18,
  school: `ABC`,

  post: () => console.log(`Make a new post`),
}

student.post()

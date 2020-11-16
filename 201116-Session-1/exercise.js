// Exercise 1: Given a year, return the century
const centuryFromYear = (year) => Math.ceil(year / 100)

console.log(centuryFromYear(1905))
console.log(centuryFromYear(1700))

// Exercise 2: ~palindrome check~
const checkPalindrome = (inputString) => {
  // const reverseString = inputString.split("").reverse().join("")
  // console.log(reverseString)
  // return reverseString === inputString

  const length = inputString.length
  const limit = Math.floor((length - 1) / 2)

  for (let i = 0; i <= limit; i++) {
    if (inputString[i] != inputString[length - i - 1]) {
      return false
    }
  }

  return true
}

console.log(checkPalindrome(`abcba`))
console.log(checkPalindrome(`abc`))
console.log(checkPalindrome(`abccba`))

// Exercise 3: Adjacent pair with highest product in an array
const adjacentElementsProduct = (inputArray) => {
  const length = inputArray.length

  if (length < 2) {
    return inputArray[0]
  }

  let max = inputArray[0] * inputArray[1]

  for (let i = 1; i < length - 1; i++) {
    if (inputArray[i] * inputArray[i + 1] > max) {
      max = inputArray[i] * inputArray[i + 1]
    }
  }

  return max
}

const inputArray = [3, 6, -2, -5, 7, 3, 8, 10, 11]
console.log(adjacentElementsProduct(inputArray))

// Exercise 4: find the even numbers in an array, with loops!
const findEvenArrayLoop = (inputArray) => {
  const length = inputArray.length
  let results = []

  for (let i = 0; i < length; i++) {
    if (inputArray[i] % 2 === 0) {
      results.push(inputArray[i])
    }
  }

  return results
}

console.log(...findEvenArrayLoop(inputArray))
console.log(inputArray.sort((a, b) => b - a))

// Exercise 4*: find the even numbers in an array, no loops!
const findEvenArray = (inputArray) => inputArray.filter((x) => x % 2 === 0)

console.log(...findEvenArray(inputArray))

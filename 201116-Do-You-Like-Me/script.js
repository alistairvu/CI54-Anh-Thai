const noIndicator = document.getElementById("no")
const yesIndicator = document.getElementById("yes")
const answer = document.getElementsByClassName("answer")[0]
let noLeft = true

noIndicator.addEventListener("mouseover", () => {
  noLeft
    ? (answer.style.flexDirection = "row-reverse")
    : (answer.style.flexDirection = "row")
  noLeft = !noLeft
})

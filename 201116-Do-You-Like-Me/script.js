const noIndicator = document.querySelector("#no")
const yesIndicator = document.querySelector("#yes")
const answer = document.querySelector(".answer")[0]

noIndicator.addEventListener("mouseover", (e) => {
  e.preventDefault()
  answer.classList.toggle("row-reverse")
})

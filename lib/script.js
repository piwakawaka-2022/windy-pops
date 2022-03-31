
const box = document.querySelector('.main-container')
const complimentsBtn = document.querySelector('.compliments-btn')
const spicyBtn = document.querySelector('.spicy-btn')
let height = box.offsetHeight //tells us height of users view height
let width = box.offsetWidth // tells us width of users view width
let complimentCount = 0; // temporary identifier
let insultCount = 0; // temporary identifier


complimentsBtn.addEventListener('click', placeCompliment)
spicyBtn.addEventListener('click', placeSpicy)
complimentsBtn.addEventListener('click', ()=>{
  console.log(complimentsBtn.innerText)
})

///hello



function placeCompliment() {
  complimentCount++
  let newText = document.createElement('p');
  newText.classList.add(`compliment-${complimentCount}`)
  newText.textContent= "compliment :-)"
  let xPos = randomPositionGenerator(width)
  let yPos = randomPositionGenerator(height)
  newText.style.setProperty('position', 'absolute')
  newText.style.bottom = `${yPos}px`
  newText.style.left = `${xPos}px`
  box.appendChild(newText)
}

function placeSpicy() {
  insultCount++
  let newText = document.createElement('p');
  newText.classList.add(`compliment-${insultCount}`)
  newText.textContent= "INSULT >:("
  let xPos = randomPositionGenerator(width)
  let yPos = randomPositionGenerator(height)
  newText.style.setProperty('position', 'absolute')
  newText.style.bottom = `${yPos}px`
  newText.style.left = `${xPos}px`
  box.appendChild(newText)
}




function randomPositionGenerator(size) {
  let max = size-50; 
  let min = 50;
  return Math.floor(Math.random() * (max-min) + min);
}


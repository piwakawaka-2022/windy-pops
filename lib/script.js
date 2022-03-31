
const box = document.querySelector('.main-container')
const buttonsRow = document.querySelector('.buttons-row')
const complimentsBtn = document.querySelector('.compliments-btn')
const spicyBtn = document.querySelector('.spicy-btn')
let height = box.offsetHeight //tells us height of users view height
let width = box.offsetWidth // tells us width of users view width
let complimentCount = 0; // temporary identifier
let insultCount = 0; // temporary identifier

//Get position of 



complimentsBtn.addEventListener('click', placeCompliment)
spicyBtn.addEventListener('click', placeSpicy)
console.log(getOffset(buttonsRow));

function getOffset(btnRow) { //This calculates the height of the button row on the page
  const rect = btnRow.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY
  }
}


function placeCompliment() {
  complimentCount++
  let newText = document.createElement('p');
  newText.classList.add(`compliment-${complimentCount}`)
  newText.textContent= "compliment :-)"
  let xPos = randomPositionGenerator(width)
  let yPos = randomPositionGenerator(height)
  newText.style.setProperty('position', 'absolute')
  newText.style.top = `${yPos}px`
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



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

function toggleClassCompliments() {

}

function placeCompliment() {
  complimentCount++
  let newText = document.createElement('p');
  newText.classList.add(`compliment-${complimentCount}`)
  newText.classList.add('compliment-text')
  newText.textContent= "compliment :-)"

  let xPos = randomPositionGenerator(width)
  let yPos = randomPositionGenerator(height)
  let rotation = randomRotation();
  newText.style.setProperty('position', 'absolute')
  newText.style.setProperty('transform', `rotate(${rotation}deg)`)
  newText.style.top = `${yPos}px`
  newText.style.left = `${xPos}px`
  box.appendChild(newText)
}

function placeSpicy() {
  insultCount++
  let newText = document.createElement('p');
  newText.classList.add(`compliment-${insultCount}`)
  newText.classList.add('angry-text')
  newText.textContent= "Insult >:("
  let xPos = randomPositionGenerator(width)
  let yPos = randomPositionGenerator(height)
  let rotation = randomRotation();
  newText.style.setProperty('position', 'absolute')
  newText.style.setProperty('transform', `rotate(${rotation}deg)`)
  newText.style.bottom = `${yPos}px`
  newText.style.left = `${xPos}px`
  box.appendChild(newText)
}


function randomPositionGenerator(size) {
  let max = size-50; 
  let min = 50;
  return Math.floor(Math.random() * (max-min) + min);
}

function randomRotation() {
  let max = 30
  let min = -30;
  return Math.floor(Math.random() * (max-min) + min);
}

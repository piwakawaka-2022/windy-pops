
const box = document.querySelector('.main-container')
const complimentsBtn = document.querySelector('.compliments-btn')
const spicyBtn = document.querySelector('.spicy-btn')
let height = box.offsetHeight //tells us height of users view height
let width = box.offsetWidth // tells us width of users view width


complimentsBtn.addEventListener('click', placeCompliment)






function placeCompliment() {
  let newText = document.createElement('p');
  newText.innerHTML="testing"
  let xPos = randomPositionGenerator(width)
  let yPos = randomPositionGenerator(height)
  console.log({xPos,yPos})
  box.appendChild(newText)
}



function randomPositionGenerator(size) {
  let max = size-50; 
  let min = 50;
  return Math.random() * (max-min) + min;
}


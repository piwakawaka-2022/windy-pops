const box = document.querySelector('.main-container')
const buttonsRow = document.querySelector('.buttons-row')
const complimentsBtn = document.querySelector('.compliments-btn')
const spicyBtn = document.querySelector('.spicy-btn')
let height = box.offsetHeight //tells us height of users view height
let width = box.offsetWidth // tells us width of users view width
let complimentCount = 0 // temporary identifier
let insultCount = 0 // temporary identifier
let testComplimentsArr = [
  'When parents meet you, they hope their kid grows up to be just like you',
  'You have the kind of smile that makes everyone happy too!',
  'You are the human version of a golden retriever',
  "I'd love to grow old with you",
  'With you, everyDay is like Friday!',
  'Are your muscles so big from holding up that giant brain of yours?',
  'I wish I could upvote you TWICE.',
  "Your voice makes me feel like I'm being kissed on the forehead while being tucked in to a bed made of ostrich feathers.",
  `You're so awesome I would fight 3 mountain lions with my hands tied behind my back just to get a chance to talk to you on Zoom with a dial-up connection. Honestly.`,
  `You're Cooler Than A Childhood Secret Handshake.`,
  `If you were a fruit, you'd be a Fine-apple`,
  'You smell like bread fresh out of the oven', //12 comments total
]
let testSpicyArr = [
  "You're like one of the bad adam sandler movies",
  "What do taxes and going to the Dentist have in common? they're painful to deal with, like you.",
  'I was hoping for a battle of wits but you appear to be unarmed',
  'You should probably water your house plants. They look sad',
  'You are more disappointing than an unsalted pretzel.',
  'Your cat pretends to sleep when you enter the room so you leave it alone',
  'You look like the sort of person that a mild butter chicken is too spicy for.',
  'I wanted to write something for you, but its just... Tiring... *yawn*',
  'Hawaiian Pizza was created in Ontario, Canada, by Greek immigrant Sam Panopoulos in 1962',
  "The japanese word 'Kuchi zamishi' is the act of eating when you're not hungry because your mouth is lonely",
  'Psycho was the first movie to show a toilet flushing.',
  'Team Wind is scientifically proven to be the best team - Elon Musk tweet', //12
]

complimentsBtn.addEventListener('click', () => {
  placeCompliment()
  toggleClassCompliments()
})
spicyBtn.addEventListener('click', () => {
  placeSpicy()
  toggleClassInsults()
})
console.log(getOffset(buttonsRow))
let offset = getOffset(buttonsRow)
console.log(offset.top)

function getOffset(btnRow) {
  //This calculates the height of the button row on the page
  const rect = btnRow.getBoundingClientRect()
  return {
    top: rect.top + window.scrollY,
  }
}

function toggleClassCompliments() {
  //add the toggle between angry and happy container
  if (box.classList.contains('angry-container')) {
    box.classList.remove('angry-container')
    box.classList.add('compliment-container')
    document.getElementsByName('button').style.background = 'rgb(134, 230, 225)'
  } else {
    return
  }
}

function toggleClassInsults() {
  //add the toggle between angry and happy container
  if (box.classList.contains('compliment-container')) {
    box.classList.remove('compliment-container')
    box.classList.add('angry-container')
    document.getElementsByName('button').style.background = 'rgb(134, 230, 225)'
  } else {
    return
  }
}

function returnComplimentfromDB() {
  // call the DB query
}
//hellllo
function returnSpicyfromDb() {
  //call the DB query
}
function placeCompliment() {
  complimentCount++
  let newText = document.createElement('p')
  newText.classList.add(`compliment-${complimentCount}`)
  newText.classList.add('compliment-text')
  let complimentNum = getRandomInt(5)
  newText.textContent = testComplimentsArr[complimentNum] //This will be the variable returned by the return compliment func
  let xPos = randomPositionGenerator(width)
  let yPos = randomPositionGenerator(height)
  if (yPos - offset.top < 100 && offset.top - yPos < 50) {
    yPos = randomPositionGenerator(height)
  }
  let rotation = randomRotation()
  newText.style.setProperty('position', 'absolute')
  newText.style.setProperty('transform', `rotate(${rotation}deg)`)

  newText.style.top = `${yPos}px`
  newText.style.left = `${xPos}px`
  box.appendChild(newText)
}

function placeSpicy() {
  insultCount++
  let newText = document.createElement('p')
  newText.classList.add(`compliment-${insultCount}`)
  newText.classList.add('angry-text')
  let insultNum = getRandomInt(5)
  newText.textContent = testSpicyArr[insultNum] //This will be the variable returned by the return spicy func
  let xPos = randomPositionGenerator(width)
  let yPos = randomPositionGenerator(height)
  if (yPos - offset.top < 100 && offset.top - yPos < 50) {
    yPos = randomPositionGenerator(height)
  }
  let rotation = randomRotation()
  newText.style.setProperty('position', 'absolute')
  newText.style.setProperty('transform', `rotate(${rotation}deg)`)
  newText.style.top = `${yPos}px`
  newText.style.left = `${xPos}px`
  box.appendChild(newText)
}

function randomPositionGenerator(size) {
  let max = size - 50
  let min = 50
  return Math.floor(Math.random() * (max - min) + min)
}

function randomRotation() {
  let max = 10
  let min = -10
  return Math.floor(Math.random() * (max - min) + min)
}

function getRandomInt(max) {
  max = 12
  return Math.floor(Math.random() * max)
}

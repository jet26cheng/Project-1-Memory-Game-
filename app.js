// this is my card array so I can make my memory game!
const cardArray = [ 
    {
        name: "Messi",
        img: "images/messi-headshot.jpeg"
        
    },
    {
        name: "Christiano Ronaldo",
        img: "images/Christiano-Ronaldo-pic.jpeg"
    },
    {
        name: "Messi",
        img: "images/messi-headshot.jpeg"
        
    },
    {
        name: "Christiano Ronaldo",
        img: "images/Christiano-Ronaldo-pic.jpeg"
    }

]

const grid = document.querySelector('.grid')

const resultBox = document.querySelector('#result')

let cardsChosen = []

let cardsChosenId = []

let cardsWon = []


// this is my create a board function i am looping through my cards array and creating a new picture element on the "board" with a data-id of the index position of i,by doing that i am appending the child onto a grid board  
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/Blank-card-2.webp')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  // this is my flip card function! so I made a new array for card being chosen! 
  function flipCard() {
    // so cardId is representing the image's id that we established on the createBoard function
    let cardId = this.getAttribute('data-id')
    // here the card chose on my first click is being pushed into two different arrays. my card chosen ID and card chosen arrays 
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    // this line is just setting the attribute of the image to the data id card image. 
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }
  
  
  
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/Blank-card-2.webp')
      cards[optionTwoId].setAttribute('src', 'images/Blank-card-2.webp')
      alert = ('You have clicked the same image!')
    } else if (cardsChosen[0] === cardsChosen[1]) {
      
    //   cards[optionOneId].setAttribute('src', 'images/Blank-card-2.webp')
    //   cards[optionTwoId].setAttribute('src', 'images/Blank-card-2.webp')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      alert("You Matched!")
    } 
    
    else {
      cards[optionOneId].setAttribute('src', 'images/Blank-card-2.webp')
      cards[optionTwoId].setAttribute('src', 'images/Blank-card-2.webp')
        resultBox.textContent= 'Sorry, try again';
    }

    cardsChosen = []
    cardsChosenId = []
   // this is the winning condition! this if statement 
    if (cardsWon.length === cardArray.length/2) {
        resultBox.textContent = "Congratulations You Win!!"
    }
   
  }


  createBoard()





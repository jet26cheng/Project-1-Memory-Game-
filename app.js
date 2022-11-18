
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
        img: "images/Christiano-Ronaldo pic.jpeg"
    }

]

const grid = document.querySelector('.grid')

const resultBox = document.querySelector('#result')

let cardsChosen = []

let cardsChosenId = []

let cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()





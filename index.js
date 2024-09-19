// BlackJack game logic

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

let chipsEl = document.getElementById("chips-el")

let min = 1

let max = 13

let hasBlackJack = false
let isAlive = false

let message = ""

let sum = 0

let cards = []

let chips = 250

function renderGame() {
        if (sum < 21) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "Blackjack!"
            chips += 200
            hasBlackJack = true
        } else {
            message = "You're out of luck, you lose!"
            isAlive = false
        }

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i += 1) {
      cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
    chipsEl.textContent = "Money: $" + chips
}

function newCard() {
  if (isAlive == true && hasBlackJack == false) {
    let drawnCard = randomCard()
    sum += drawnCard
    cards.push(drawnCard)
    renderGame()
  }
}

function startGame() {
  if (chips > 0) {
    isAlive = true
    hasBlackJack = false
    chips -= 50
    cards = []
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards.push(firstCard)
    cards.push(secondCard)

    sum = (firstCard + secondCard)
    renderGame()
  } else {
    message = "You're out of cash, come back another day!"
    messageEl.textContent = message
  }

}

function randomCard() {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  if (randomNumber == 1) {
    return 11
  } else if (randomNumber > 10) {
    return 10
  } else {
    return randomNumber
  }

}

function resetGame() {
  hasBlackJack = false
  isAlive = false

  message = ""

  sum = 0

  cards = []

  chips = 250

  sumEl.textContent = "Sum: "
  messageEl.textContent = "Want to play a round?"
  chipsEl.textContent = ""
  cardsEl.textContent = "Cards: "
}
// BlackJack game logic

function showGame(elementID) {
  const element = document.getElementById(elementID)
  element.classList.toggle("d-none")
}

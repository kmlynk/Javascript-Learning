let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
}

const win = 'You Won!'
const lose = 'You Lost!'
const tie = 'Tie!'

const resultPage = document.querySelector('.js-result')
const selectionPage = document.querySelector('.js-selection')
const scorePage = document.querySelector('.js-score')

function comp() {
  let compMove = ''
  const random = Math.random()

  if (random >= 0 && random < 1/3) {
    return compMove = 'rock'
  }
  else if (random >= 1/3 && random < 2/3) {
    return compMove = 'paper'
  }
  else return compMove = 'scissors'
}

let isAutoPlaying = false
let intervalID

function autoPlay() {
  if (!isAutoPlaying) {
    intervalID = setInterval(function () {
      const playerMove = comp()
      playGame(playerMove)
    }, 1000)
    isAutoPlaying = true
  } 
  else {
    clearInterval(intervalID)
    isAutoPlaying = false
  }
}

function playGame(userMove) {
  compMove = comp()

  if (userMove != compMove) {
    if (userMove == 'rock' && compMove == 'paper') {
      result = lose
      score.loses += 1
    }
    else if (userMove == 'rock' && compMove == 'scissors') {
      result = win
      score.wins += 1
    }
    else if (userMove == 'paper' && compMove == 'rock') {
      result = win
      score.wins += 1 
    }
    else if (userMove == 'paper' && compMove == 'scissors') {
      result = lose
      score.loses += 1
    }
    else if (userMove == 'scissors' && compMove == 'rock') {
      result = lose
      score.loses += 1
    }
    else if (userMove == 'scissors' && compMove == 'paper') {
      result = win
      score.wins += 1
    }
  }
  else {
    result = tie
    score.ties += 1
  }

  localStorage.setItem('score', JSON.stringify(score))

  // Changing the body to show result, moves and scores
  resultPage.innerHTML = `${result}`
  selectionPage.innerHTML = `You 
<img src="images/${userMove}-emoji.png" alt="" class="css-moveIcon"> 
<img src="images/${compMove}-emoji.png" alt="" class="css-moveIcon"> 
Computer `
  scorePage.innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`
}
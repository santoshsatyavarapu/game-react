// Write your code here.

import './index.css'

const WinOrLoseCard = paras => {
  const {score, playAgain} = paras

  const buttonClicked = () => {
    playAgain()
  }

  let result
  let message
  let imgUrl

  if (score === 12) {
    result = 'You Won'
    message = 'Best Score'
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    result = 'You Lose'
    message = 'Score'
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }
  return (
    <div className="result-card">
      <img src={imgUrl} alt="win or lose" className="result-image" />
      <h1 className="heading">{result}</h1>
      <p className="heading">{message}</p>
      <p className="result">{score}/12</p>
      <button
        type="button"
        className="paly-again-button"
        onClick={buttonClicked}
      >
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard

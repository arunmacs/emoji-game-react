import './index.css'

const WinOrLoseCard = props => {
  const {gameWon, topScore, startGameAgain} = props

  const reStartGame = () => {
    startGameAgain()
  }

  const renderWinViewCard = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="won"
        className="won-lose-img"
      />
      <h1 className="game-status-greet">You Won</h1>
      <p className="score-text">Best Score</p>
      <p className="win-lose-score">12/12</p>
      <button type="button" onClick={reStartGame} className="play-again">
        Play Again
      </button>
    </>
  )

  const renderLoseViewCard = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="lose"
        className="won-lose-img"
      />
      <h1 className="game-status-greet">You Lose</h1>
      <p className="score-text">Score</p>
      <p className="win-lose-score">{topScore}/12</p>
      <button type="button" onClick={reStartGame} className="play-again">
        Play Again
      </button>
    </>
  )

  return (
    <div className="win-lose-card-container">
      {gameWon ? renderWinViewCard() : renderLoseViewCard()}
    </div>
  )
}

export default WinOrLoseCard

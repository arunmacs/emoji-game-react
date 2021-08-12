import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="win-or-lose-image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard

// import './index.css'

// const WinOrLoseCard = props => {
//   const {gameWon, topScore, startGameAgain} = props

//   const reStartGame = () => {
//     startGameAgain()
//   }

//   const renderWinViewCard = () => (
//     <>
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
//         alt="won"
//         className="won-lose-img"
//       />
//       <h1 className="game-status-greet">You Won</h1>
//       <p className="score-text">Best Score</p>
//       <p className="win-lose-score">12/12</p>
//       <button type="button" onClick={reStartGame} className="play-again">
//         Play Again
//       </button>
//     </>
//   )

//   const renderLoseViewCard = () => (
//     <>
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
//         alt="lose"
//         className="won-lose-img"
//       />
//       <h1 className="game-status-greet">You Lose</h1>
//       <p className="score-text">Score</p>
//       <p className="win-lose-score">{topScore}/12</p>
//       <button type="button" onClick={reStartGame} className="play-again">
//         Play Again
//       </button>
//     </>
//   )

//   return (
//     <div className="win-lose-card-container">
//       {gameWon ? renderWinViewCard() : renderLoseViewCard()}
//     </div>
//   )
// }

// export default WinOrLoseCard

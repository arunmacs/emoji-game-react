import './index.css'

const NavBar = props => {
  const {score, topScore, gameOver} = props

  return (
    <nav>
      <div className="logo-title-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="logo"
          className="logo-img"
        />
        <h1 className="emoji-game-title">Emoji Game</h1>
      </div>
      {gameOver ? (
        ''
      ) : (
        <div className="scores-container">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar

import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  renderScores = () => {
    const {currentScore, isGameOver, topScore} = this.props

    if (isGameOver) {
      return null
    }
    return (
      <div className="scores-container">
        <p className="score">Score: {currentScore}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="nav-bar-container">
        <div className="title-with-score-container">
          <div className="logo-and-title-container">
            <img
              className="emoji-logo"
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="Emoji Logo"
            />
            <h1 className="title">Emoji Game</h1>
          </div>
          {this.renderScores()}
        </div>
      </nav>
    )
  }
}

export default NavBar

// import './index.css'

// const NavBar = props => {
//   const {score, topScore, gameOver} = props

//   return (
//     <nav>
//       <div className="logo-title-container">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
//           alt="logo"
//           className="logo-img"
//         />
//         <h1 className="emoji-game-title">Emoji Game</h1>
//       </div>
//       {gameOver ? (
//         ''
//       ) : (
//         <div className="scores-container">
//           <p className="score">Score: {score}</p>
//           <p className="score">Top Score: {topScore}</p>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default NavBar

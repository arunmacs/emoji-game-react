import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    isGameOver: false,
    topScore: 0,
  }

  setTopScore = currentScore => {
    const {topScore} = this.state
    if (currentScore > topScore) {
      this.setState({topScore: currentScore})
    }
  }

  finishGameAndSetTopScore = newScore => {
    this.setIsGameOver(true)
    this.setTopScore(newScore)
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isEmojiPresent = clickedEmojis.includes(id)
    const clickedEmojisLength = clickedEmojis.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojis: [...previousState.clickedEmojis, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(emoji => (
          <EmojiCard
            emoji={emoji}
            key={emoji.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  setIsGameOver = value => {
    this.setState({isGameOver: value})
  }

  resetGame = () => {
    this.setIsGameOver(false)
    this.setState({clickedEmojis: []})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = clickedEmojis.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojis.length}
      />
    )
  }

  render() {
    const {clickedEmojis, isGameOver, topScore} = this.state

    return (
      <div className="emoji-game-container">
        <NavBar
          currentScore={clickedEmojis.length}
          isGameOver={isGameOver}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {isGameOver ? this.renderScoreCard() : this.renderEmojisList()}
        </div>
      </div>
    )
  }
}

export default EmojiGame

// import {Component} from 'react'
// import NavBar from '../NavBar'
// import EmojiCard from '../EmojiCard'
// import WinOrLoseCard from '../WinOrLoseCard'

// import './index.css'

// class EmojiGame extends Component {
//   state = {
//     score: 0,
//     topScore: 0,
//     traceEmojiIds: [],
//     gameWon: false,
//     gameOver: false,
//   }

//   startGameAgain = () => {
//     // const {score} = this.state

//     this.setState({
//       traceEmojiIds: [],
//       score: 0,
//       gameOver: false,
//       gameWon: false,
//     })
//   }

//   onClickSelectEmoji = id => {
//     const {traceEmojiIds, score} = this.state
//     const {emojisList} = this.props

//     if (traceEmojiIds.includes(id)) {
//       this.setState(prevState => ({
//         traceEmojiIds: [],
//         topScore: prevState.topScore > score ? prevState.topScore : score,
//         score: 0,
//         gameWon: false,
//         gameOver: true,
//       }))
//     } else if (score === emojisList.length - 1) {
//       this.setState(prevState => ({
//         traceEmojiIds: [],
//         topScore: prevState.topScore > score ? prevState.topScore : score,
//         score: 0,
//         gameOver: true,
//         gameWon: true,
//       }))
//     } else {
//       this.setState(prevState => ({
//         traceEmojiIds: [...prevState.traceEmojiIds, id],
//         score: prevState.score + 1,
//         gameOver: false,
//       }))
//     }
//   }

//   shuffledEmojisList = () => {
//     const {emojisList} = this.props

//     return emojisList.sort(() => Math.random() - 0.5)
//   }

//   renderEmojis = () => {
//     const emojiList = this.shuffledEmojisList()

//     return (
//       <ul>
//         {emojiList.map(emoji => (
//           <EmojiCard
//             emoji={emoji}
//             onClickSelectEmoji={this.onClickSelectEmoji}
//             key={emoji.id}
//           />
//         ))}
//       </ul>
//     )
//   }

//   render() {
//     const {score, topScore, gameWon, gameOver} = this.state

//     return (
//       <div className="app-container">
//         <header>
//           <NavBar score={score} topScore={topScore} gameOver={gameOver} />
//         </header>
//         <div className="app-body">
//           {gameOver ? (
//             <WinOrLoseCard
//               gameWon={gameWon}
//               score={score}
//               topScore={topScore}
//               startGameAgain={this.startGameAgain}
//             />
//           ) : (
//             this.renderEmojis()
//           )}
//         </div>
//       </div>
//     )
//   }
// }

// export default EmojiGame

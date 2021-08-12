import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    traceEmojiIds: [],
    gameWon: false,
    gameOver: false,
  }

  startGameAgain = () => {
    // const {score} = this.state

    this.setState({
      traceEmojiIds: [],
      score: 0,
      gameOver: false,
      gameWon: false,
    })
  }

  onClickSelectEmoji = id => {
    const {traceEmojiIds, score} = this.state
    const {emojisList} = this.props

    if (traceEmojiIds.includes(id)) {
      this.setState(prevState => ({
        traceEmojiIds: [],
        topScore: prevState.topScore > score ? prevState.topScore : score,
        score: 0,
        gameWon: false,
        gameOver: true,
      }))
    } else if (score === emojisList.length - 1) {
      this.setState(prevState => ({
        traceEmojiIds: [],
        topScore: prevState.topScore > score ? prevState.topScore : score,
        score: 0,
        gameOver: true,
        gameWon: true,
      }))
    } else {
      this.setState(prevState => ({
        traceEmojiIds: [...prevState.traceEmojiIds, id],
        score: prevState.score + 1,
        gameOver: false,
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojis = () => {
    const emojiList = this.shuffledEmojisList()

    return (
      <ul>
        {emojiList.map(emoji => (
          <EmojiCard
            emoji={emoji}
            onClickSelectEmoji={this.onClickSelectEmoji}
            key={emoji.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topScore, gameWon, gameOver} = this.state

    return (
      <div className="app-container">
        <header>
          <NavBar score={score} topScore={topScore} gameOver={gameOver} />
        </header>
        <div className="app-body">
          {gameOver ? (
            <WinOrLoseCard
              gameWon={gameWon}
              score={score}
              topScore={topScore}
              startGameAgain={this.startGameAgain}
            />
          ) : (
            this.renderEmojis()
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame

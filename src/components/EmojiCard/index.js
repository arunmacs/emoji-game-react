import './index.css'

const EmojiCard = props => {
  const {emoji, onClickSelectEmoji} = props
  const {emojiName, id, emojiUrl} = emoji

  const selectEmoji = () => {
    onClickSelectEmoji(id)
  }

  return (
    <li onClick={selectEmoji}>
      <img src={emojiUrl} alt={emojiName} className="emoji-img" />
    </li>
  )
}

export default EmojiCard

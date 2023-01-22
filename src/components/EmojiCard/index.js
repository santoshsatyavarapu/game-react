// Write your code here.

import './index.css'

const EmojiCard = param => {
  const {eachElement, onClickEmoji, gameStatus} = param
  const {id, emojiName, emojiUrl, isSelected} = eachElement
  const emojiClicked = () => {
    if (isSelected) {
      gameStatus()
    } else {
      onClickEmoji(id)
    }
  }

  return (
    <li>
      <button type="button" className="card" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard

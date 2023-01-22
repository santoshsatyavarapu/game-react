/*
Quick Tip

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.



*/

// Write your code here.
import {Component} from 'react'

import './index.css'

import WinOrLoseCard from '../WinOrLoseCard/index'

import NavBar from '../NavBar/index'

import EmojiCard from '../EmojiCard/index'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
    isSelected: false,
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
    isSelected: false,
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
    isSelected: false,
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
    isSelected: false,
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
    isSelected: false,
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
    isSelected: false,
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
    isSelected: false,
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
    isSelected: false,
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
    isSelected: false,
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
    isSelected: false,
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
    isSelected: false,
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
    isSelected: false,
  },
]

class EmojiGame extends Component {
  state = {emojiList: emojisList, score: 0, topScore: 0, gameStatus: false}

  shuffledEmojisList = emojiList => emojiList.sort(() => Math.random() - 0.5)

  onClickEmoji = id => {
    const {emojiList, score} = this.state
    const shuffledList = this.shuffledEmojisList(emojiList)
    const updatedList = shuffledList.map(eachElement => {
      if (eachElement.id === id) {
        return {...eachElement, isSelected: true}
      }
      return eachElement
    })
    if (score === 11) {
      this.setState({
        gameStatus: true,
        score: 12,
        topScore: 12,
        emojiList: emojisList,
      })
    } else {
      this.setState({
        emojiList: [...updatedList],
        score: score + 1,
      })
    }
  }

  gameStatus = () => {
    this.setState({gameStatus: true})
  }

  playAgain = () => {
    let {topScore} = this.state
    const {score} = this.state
    if (score > topScore) {
      topScore = score
    }

    this.setState({
      gameStatus: false,
      score: 0,
      topScore,
      emojiList: emojisList,
    })
  }

  render() {
    const {emojiList, score, topScore, gameStatus} = this.state
    return (
      <>
        <NavBar score={score} topScore={topScore} gameStatus={gameStatus} />
        <div className="container">
          {!gameStatus && (
            <ul>
              {emojiList.map(eachElement => (
                <EmojiCard
                  eachElement={eachElement}
                  key={eachElement.id}
                  onClickEmoji={this.onClickEmoji}
                  gameStatus={this.gameStatus}
                />
              ))}
            </ul>
          )}
          {gameStatus && (
            <WinOrLoseCard score={score} playAgain={this.playAgain} />
          )}
        </div>
      </>
    )
  }
}

export default EmojiGame

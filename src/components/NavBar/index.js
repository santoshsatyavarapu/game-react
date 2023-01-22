// Write your code here.
import './index.css'

const NavBar = paras => {
  const {score, topScore, gameStatus} = paras

  return (
    <div className="navbar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-heading">Emoji Game</h1>
      </div>
      {!gameStatus && (
        <div className={`scores-container `}>
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar

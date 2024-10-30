import React from 'react'
import { Link } from 'react-router-dom'

const Game = () => {
  return (
    <div>
     <h1>Who wants to Become a Millionare Game !</h1>


     {/* link to /game/gameboard cpage */}
     <Link to="/game/gameboard">
     <button>Start Game</button>
     </Link>
    </div>
  )
}

export default Game

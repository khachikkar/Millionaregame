import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
const Game = () => {
  return (
    <div className='startGame'>
     <h1>Who wants to Become a Millionare Game !</h1>

     <Link to="/game/gameboard">
    <Button>Start the Game</Button>
     </Link>
   
    </div>
  )
}

export default Game

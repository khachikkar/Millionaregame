import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
// import prestart from "../../voices/prestart.mp3"

// const audio = new Audio(prestart);


const Game = () => {

    // audio.play();

  return (
    <div className='startGame'>
     <h1>Who wants to Become a Millionare Game !</h1>

     <Link to="/game/gameboard">
    <Button >Start the Game</Button>
     </Link>
   
    </div>
  )
}

export default Game

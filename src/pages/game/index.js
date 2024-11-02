import { Button } from 'antd'
import React from 'react'
import {useEffect} from "react";
import { Link } from 'react-router-dom'
import "./index.css"
import prestart from "../../voices/prestart.mp3"



const Game = () => {
    const audio = new Audio(prestart);

    useEffect(() => {
        // Try to play the audio automatically
        const playAudio = async () => {
            try {
                await audio.play();
            } catch (error) {
                console.log('Audio playback failed:', error);
                // Optionally handle the error here
            }
        };

        playAudio(); // Attempt to play audio

        return () => {
            audio.pause(); // Pause the audio when component unmounts
            audio.currentTime = (1000 * 60 * 3); // Reset audio to start
        };
    }, [audio]);

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

import React, { useContext, useState } from "react";
import { GameContext } from "../../context/context";
import "./index.css";
import QuestItem from "../../components/questItem";

const GameBoard = () => {
  const { data } = useContext(GameContext);

  console.log(data);

  const [lose, setIsLose] = useState(false)
  const [rightAnswer, setRightAnswer] = useState([data[0]]);

const additeminright = (e)=>{
const answ = e.target.textContent

const comp = data[rightAnswer.length - 1].correctOption

if(rightAnswer.length === 10){
    alert("you win")
    return // must show play again button and go new game
}

if (answ === comp){
    console.log("right")
setRightAnswer([...rightAnswer, data[0]]);
}else{
    setIsLose(true)
    console.log("wrong")
}
}

console.log(rightAnswer, ">>>>>>>>>")

const last =  data[rightAnswer.length-1]

  return (
    <div className="GameBoardCont">
      <h1>Game Board</h1>

    
    {
        lose 
        ? <p>you lose Try Again</p>
        : <div><p>{rightAnswer.length}</p> <QuestItem  item={last} additeminright={additeminright} /></div>

    }

    </div>
  );
};

export default GameBoard;

import React, { useContext, useState } from "react";
import { GameContext } from "../../context/context";
import "./index.css";
import QuestItem from "../../components/questItem";
import { Link } from "react-router-dom";
import { Button } from "antd";

const winMoney = []
const counts = []


const GameBoard = () => {


function handlenewgame (){
    console.log("new game")
    counts.length =0
    winMoney.length =0
}



  const { data } = useContext(GameContext);

//   console.log(data);

  const [lose, setIsLose] = useState(false)
  const [win, setWin] =useState(false)
  const [rightAnswer, setRightAnswer] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(data[0])
  const [isdisabled, setIsDisabled] = useState(false);
  const [greenOnOption, setGreenOnOption] = useState(false)
    const [fiftyUsed, setFiftyUsed] = useState(false);
  const [friendused, setFriendUsed] = useState(false);
const additeminright = (e)=>{


const answ = e.target.textContent
const comp = data[rightAnswer.length].correctOption

if (answ === comp){
    console.log("right")
    setGreenOnOption(true)


if(rightAnswer.length === 8){
    alert(`you win $${winMoney[winMoney.length-1] || "no money"}`)
    setIsLose(true)
    setWin(true)
    return // must show play again button and go new game
}



switch(counts.length){
    case 2:
    winMoney.push(4000)
    console.log(winMoney, "winmopmney")
    break
    case 6:
    winMoney.push(8000)
    console.log(winMoney, "winmopmney")
    break
     case 7:
    winMoney.push(10000)
    console.log(winMoney, "winmopmney")
    break
    default:
        break
}

setRightAnswer([...rightAnswer, data[rightAnswer.length]]);

setTimeout(() => {
    setCurrentQuestion(data[rightAnswer.length + 1]);
    setGreenOnOption(false); // Reset option color
}, 2000);

counts.push(1) ///
console.log(counts, "counts")

}else{
    setIsLose(true)
    console.log("wrong")
    setGreenOnOption(false)
}
}

const handleArea  = ()=>{
      const answ = currentQuestion.correctOption
      alert(`The Area think that correct answer is ${answ}`)
    setIsDisabled(true)
}

    const handleFriend  = ()=>{
        const answ = currentQuestion.correctOption
        alert(`The Kim Kardashian think that right answer is ${answ}`)
        setFriendUsed(true)
    }


    const handleFiftyFifty = () => {
        if (!fiftyUsed) {
            const correctOption = currentQuestion.correctOption;
            const options = currentQuestion.options;

            // Get two options: correct and one random incorrect
            const filteredOptions = options.filter(
                (option) => option === correctOption || Math.random() > 0.5
            ).slice(0, 2); // Ensure only 2 options remain

            // Update the current question with filtered options
            setCurrentQuestion({
                ...currentQuestion,
                options: filteredOptions,
            });
            setFiftyUsed(true); // Mark 50/50 as used
        }
    };



  return (
    <div className="GameBoardCont">
      {/* <h1>Game Board</h1> */}

    <div className="points">
    <h1>Game Borad</h1>


    <div className="pointsCont">
          {["1000 AMD", "2000 AMD", "4000 AMD", "5000 AMD", "6000 AMD", "7000 AMD", "8000 AMD", "9000 AMD", "10000 AMD"].map((amount, index) => (
            <div
              key={index}
              className={`pItem ${index < rightAnswer.length ? "highlight" : ""}`}
            >
              {amount}
            </div>
          ))}
    </div>


    </div>


    <div>
    
    {
        lose 
        ?
        win 
        ? <div className="modal win"><h4>Congrats You Win and you have ${winMoney[winMoney.length-1]} Dollars  </h4><Link to="/game"><Button type="primary">Start New Game</Button></Link></div>
        : <div className="modal nowin"><h4>you lose and have ${winMoney[winMoney.length-1] || "0"} Dollars Try Again </h4> <Link to="/game"><Button  type="primary" onClick={handlenewgame}>Try Again</Button></Link></div>
        : <div className="questBlock"> 
            
        <QuestItem  item={currentQuestion} additeminright={additeminright} greenOnOption={greenOnOption} />
        <div>
            <Button disabled={fiftyUsed} onClick={handleFiftyFifty}>50/50</Button>
            <Button disabled={isdisabled} onClick={handleArea}>Area Help</Button>
            <Button disabled={friendused} onClick={handleFriend}>Call to Friend</Button>
        </div>
        
        </div>
    }
    </div>

    </div>
  );
};

export default GameBoard;

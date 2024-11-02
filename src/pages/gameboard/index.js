import React, {useContext, useEffect, useState} from "react";
import { GameContext } from "../../context/context";
import "./index.css";
import QuestItem from "../../components/questItem";
import { Link } from "react-router-dom";
import { Button } from "antd";

import mainaudio from "../../voices/main.mp3"
import winaudio from "../../voices/win.mp3"
import loseaudio from "../../voices/lose.mp3"
import lastwin from "../../voices/last.mp3"


import translations from "../../internationization/translations";


const winMoney = []
const counts = []







const GameBoard = () => {

    const themeAudio = new Audio(mainaudio)
    const loseAudio = new Audio(loseaudio)
    const winAudio = new Audio(winaudio)
    const lastwinAudio = new Audio(lastwin)


    useEffect(() => {
        // Try to play the audio automatically
        const playAudio = async () => {
            try {
                await themeAudio.play();
            } catch (error) {
                console.log('Audio playback failed:', error);
                // Optionally handle the error here
            }
        };

        playAudio(); // Attempt to play audio

        return () => {
            themeAudio.pause(); // Pause the audio when component unmounts
            // lastwinAudio.pause()
            themeAudio.currentTime = (1000 * 60 ); // Reset audio to start
        };
    }, [themeAudio]);


const {language} = useContext(GameContext)


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
const comp = data[rightAnswer.length].correctOption[language]

if (answ === comp){
    winAudio.play()
    console.log("right")
    setGreenOnOption(true)





if(rightAnswer.length === 8){
    alert(`you win $${winMoney[winMoney.length-1] || "no money"}`)
    setIsLose(true)
    setWin(true)
    lastwinAudio.play()
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
// winAudio.play()
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
    loseAudio.play()
}
}

const answForhelpers = currentQuestion.correctOption[language]

const handleArea  = ()=>{
      alert(`The Area think that correct answer is ${answForhelpers}`)
    setIsDisabled(true)
}

const handleFriend  = ()=>{

        alert(`The Kim Kardashian think that right answer is ${answForhelpers}`)
        setFriendUsed(true)
    }

// const handleFiftyFifty = () => {
//         if (!fiftyUsed) {
//             const correctOption = answForhelpers
//             const options = currentQuestion.options[language];
//
//             // Get two options: correct and one random incorrect
//             const filteredOptions = options.filter(
//                 (option) => option === correctOption || Math.random() > 0.5
//             ).slice(0, 2); // Ensure only 2 options remain
//
//             // Update the current question with filtered options
//             setCurrentQuestion({
//                 ...currentQuestion,
//                 options: {
//                     ...currentQuestion.options,
//                     [language]: {filteredOptions}
//                 }
//             });
//             setFiftyUsed(true); // Mark 50/50 as used
//         }
//     };

    const handleFiftyFifty = () => {
        if (!fiftyUsed) {
            const correctOption = answForhelpers;
            const options = currentQuestion.options[language];

            // Get two options: correct and one random incorrect
            const filteredOptions = options.filter(
                (option) => option === correctOption || Math.random() > 0.5
            ).slice(0, 2); // Ensure only 2 options remain

            // Update the current question with filtered options
            setCurrentQuestion((prevQuestion) => ({
                ...prevQuestion,
                options: {
                    ...prevQuestion.options, // Preserve other language options if they exist
                    [language]: filteredOptions // Update the specific language options
                },
            }));

            setFiftyUsed(true); // Mark 50/50 as used
        }
    };

  return (
    <div className="GameBoardCont">
      {/* <h1>Game Board</h1> */}

    <div className="points">
    <h1>{translations[language].pointsTitle}</h1>


    <div className="pointsCont">
          {translations[language].moneyPoints.map((amount, index) => (
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
        ? <div className="modal win"><h4>{translations[language].congratsWin.replace("${amount}", winMoney[winMoney.length - 1])}</h4><Link to="/game"><Button type="primary">{translations[language].startNewGame}</Button></Link></div>
        : <div className="modal nowin"><h4>{translations[language].loseMessage.replace("${amount}", winMoney[winMoney.length - 1] || "0")}</h4> <Link to="/game"><Button  type="primary" onClick={handlenewgame}>{translations[language].tryAgain}</Button></Link></div>
        : <div className="questBlock">

        <QuestItem  item={currentQuestion} additeminright={additeminright} greenOnOption={greenOnOption} />
        <div>
            <Button disabled={fiftyUsed} onClick={handleFiftyFifty}>{translations[language].fiftyFifty}</Button>
            <Button disabled={isdisabled} onClick={handleArea}>{translations[language].areaHelp}</Button>
            <Button disabled={friendused} onClick={handleFriend}>{translations[language].friendCall}</Button>
        </div>

        </div>
    }
    </div>

    </div>
  );
};

export default GameBoard;

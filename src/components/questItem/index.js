import React, {useContext, useState} from 'react'
import "./index.css"
import {GameContext} from "../../context/context";
const QuestItem = ({item, additeminright, greenOnOption}) => {
    const { question, options } = item;
    console.log(item)

    const [selectedOption, setSelectedOption] = useState(null);
    const {language} = useContext(GameContext);

    const handleOptionClick = (e, index) => {
      setSelectedOption(index);  // Track which option was clicked
      additeminright(e);
  };

    const translatedQuestion = question[language]; // Access the question based on the selected language
    const translatedOptions = options[language]; // Map over options to get the translated values

    console.log(translatedQuestion,">>>>>>>>>");
console.log(translatedOptions, ">>>>>>>");

  return (
    <div  className="gameBlock">
    <h2>{translatedQuestion}</h2>

    <div className="versions">
    {translatedOptions.map((option, index) => (
                    <span
                        key={index}
                        className={greenOnOption && index === selectedOption ? "green" : "orange"}
                        onClick={(e) => handleOptionClick(e, index)}
                    >
                        {option}
                    </span>
                ))}
    </div>
  </div>
  )
}

export default QuestItem

import React, { useState } from 'react'
import "./index.css"
const QuestItem = ({item, additeminright, greenOnOption}) => {
    const { question, options } = item;

    const [selectedOption, setSelectedOption] = useState(null);


    const handleOptionClick = (e, index) => {
      setSelectedOption(index);  // Track which option was clicked
      additeminright(e);
  };



  return (
    <div  className="gameBlock">
    <h2>{question}</h2>

    <div className="versions">
    {options.map((option, index) => (
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

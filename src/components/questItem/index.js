import React from 'react'

const QuestItem = ({item, additeminright}) => {
    const { question, options } = item;
  return (
    <div  className="gameBlock">
    <h2>{question}</h2>

    <div className="versions">
      <span onClick={(e)=>additeminright(e)}>{options[0]}</span>
      <span onClick={(e)=>additeminright(e)}>{options[1]}</span>
      <span onClick={(e)=>additeminright(e)}>{options[2]}</span>
      <span onClick={(e)=>additeminright(e)}>{options[3]}</span>
    </div>
  </div>
  )
}

export default QuestItem

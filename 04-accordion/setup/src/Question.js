import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className='question'>
      <header>
        <h4>{props.title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </header>
      {showInfo && <p>{props.info}</p>}
    </div>
  );
};

export default Question;

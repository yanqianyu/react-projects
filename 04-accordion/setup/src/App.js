import React, { useState } from 'react';
import questions from './data';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <div className=''>
          {data.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}/>
            )
          })}
        </div>
      </div>
    </main>
  );
}

export default App;

import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className='main'>
      <div>{people.length} birthdays today</div>
      <List people={people}/>
      <button onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;

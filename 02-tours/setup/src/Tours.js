import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  return (
    <div>
      <div className='title'>
        <h2>Our Tour</h2>
        <div className='underline'></div>
      </div>
      <div>
        {props.tours.map((tour) => <Tour key={tour.id} tour={tour} removeTour={props.removeTour}/>)}
      </div>
    </div>
  );
};

export default Tours;

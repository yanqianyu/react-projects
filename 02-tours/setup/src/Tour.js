import React, { useState } from 'react';

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className='single-tour'>
      <img src={props.tour.image} alt={props.tour.name}></img>
      <footer>
        <div className='tour-info'>
          <h4>{props.tour.name}</h4>
          <h4 className='tour-price'>{props.tour.price}</h4>
        </div>
        <p>
          {readMore? props.tour.info : props.tour.info.substring(0, 200) }
          <button onClick={() => setReadMore(!readMore)}>
            {readMore? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => props.removeTour(props.tour.id)}>Not Interested</button>
      </footer>
    </div>
  );
};

export default Tour;

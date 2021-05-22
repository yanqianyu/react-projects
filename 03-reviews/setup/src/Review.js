import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const person = people[index];
  const checkIndex = (index) => {
    if (index > people.length - 1) {
      return 0;
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    })
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    })
  };

  const randomPerson = () => {
    let randIndex = Math.floor(Math.random() * people.length);
    if (randIndex === index) {
      randIndex = index + 1;
    }
    setIndex(checkIndex(randIndex));
  }

  return (
    <div className='review'>
      <div className='img-container'>
        <img className='person-img' src={person.image} alt={person.name}/>
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className='author'>{person.name}</h4>
      <p className='job'>{person.job}</p>
      <p className='info'>{person.text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft/>
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight/>
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>Suprise Me</button>
    </div>
  );
};

export default Review;

import React from 'react';
import Birthday from '../src/Birthday';

const List = (props) => {
  const listItems = props.people.map((e) => <li><Birthday person={e}/></li>)
  return (
    <>
      <ul>
        {listItems}
      </ul>
    </>
  );
};

export default List;

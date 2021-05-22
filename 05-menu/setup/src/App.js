import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const all = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(all);
  
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <div className='menu'>
        <div className='title'>
          <h3>Our Menu</h3>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </div>
    </main>
  );
}

export default App;

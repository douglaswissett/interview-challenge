import React, { useState } from 'react';
import './App.css';
import {
  ItemPicker,
  MenuPreview
} from './components';
import data from './items';


export default () => {
  const [menu, setMenu] = useState([]);

  const addMenuItemHandler = (item) => {
    if (menu.findIndex(i => i.id === item.id) < 0) {
      setMenu([...menu, item]);
    }
  }

  const removeMenuItemHandler = (index) => {
    const modifiedMenu = [...menu];
    modifiedMenu.splice(index, 1)
    setMenu(modifiedMenu);
  }

  const calculateTotalSelectedItems = () => `${menu.length} items`;

  const calculateTotalDietaryItems = () => {
    const total = menu.map(item => item.dietaries).flat();

    const counts = {};
    for (let i = 0; i < total.length; i++) {
        counts[total[i]] = 1 + (counts[total[i]] || 0);
    }

    return Object.keys(counts).map(key => (
      <React.Fragment key={key}>
        {counts[key]}x
        <span className="dietary">{key}</span>
      </React.Fragment>
    ));
  }

  return (
    <div className="wrapper">
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
              <span>{ calculateTotalSelectedItems() }</span>
            </div>
            <div className="col-6 menu-summary-right">
              { calculateTotalDietaryItems() }
            </div>
          </div>
        </div>
      </div>
      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <ul className="item-picker">
            {
              data.map(item => (
                <ItemPicker
                  key={item.id}
                  item={item}
                  onClick={addMenuItemHandler}
                />
              ))
            }
            </ul>
          </div>
          <div className="col-8">
            <h2>Menu preview</h2>
            <ul className="menu-preview">
             {
               menu.map((item, index) => (
                 <MenuPreview
                  key={item.id}
                  item={item}
                  index={index}
                  onRemove={removeMenuItemHandler}
                 />
               ))
             }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

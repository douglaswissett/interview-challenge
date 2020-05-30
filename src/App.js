import React, { useState } from 'react';
import './App.css';
import {
  ItemPicker,
  MenuPreview
} from './components';
import data from './items';


export default () => {
  return (
    <div className="wrapper">
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
              <span>5 items</span>
            </div>
            <div className="col-6 menu-summary-right">
              6x <span className="dietary">ve</span>
              4x <span className="dietary">v</span>
              12x <span className="dietary">n!</span>
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
                />
              ))
            }
            </ul>
          </div>
          <div className="col-8">
            <h2>Menu preview</h2>
            <ul className="menu-preview">
              <MenuPreview />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

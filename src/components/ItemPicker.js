import React from 'react';

export default (props) => (
  <li className="item">
    <h2>{ props.item.name }</h2>
    <p>
      {
        props.item.dietaries.map(dietary => (
          <span className="dietary" key={dietary}>{ dietary }</span>
        ))
      }
    </p>
  </li>
);

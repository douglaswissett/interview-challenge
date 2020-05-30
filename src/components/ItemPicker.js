import React from 'react';

export default (props) => {
  const handleClick = () => props.onClick(props.item);

  return (
    <li className="item" onClick={handleClick}>
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
};

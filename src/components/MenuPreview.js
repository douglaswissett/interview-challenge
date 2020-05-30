import React from 'react';

export default (props) => {
  const handleClick = () => props.onRemove(props.index);

  return (
    <li className="item">
      <h2>{ props.item.name }</h2>
      <p>
        {
          props.item.dietaries.map(dietary => (
            <span className="dietary" key={dietary}>{ dietary }</span>
          ))
        }
      </p>
      <button className="remove-item" onClick={handleClick}>x</button>
    </li>
  );
}

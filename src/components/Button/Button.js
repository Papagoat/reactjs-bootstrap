import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <span>
      <button
        className={props.className}
        type={props.type}
        onClick={props.onClick}>
        {props.name}
      </button>
    </span>
  );
}

export default Button;

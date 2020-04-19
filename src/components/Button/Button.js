import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <div>
            <button className={props.className} type={props.type}>{props.name}</button>
        </div>
    );
}

export default Button;

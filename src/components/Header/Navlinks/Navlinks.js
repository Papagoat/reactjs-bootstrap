import React from 'react';
import './Navlinks.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Navlinks(props) {
  return (
    <div>
      <li className='nav-item'>
        <Link to={props.link} className='nav-link'>
          {props.name}
        </Link>
      </li>
    </div>
  );
}

export default Navlinks;

import React from 'react';
import ReactDOM from 'react-dom';
import Navlinks from './Navlinks';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navlinks />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';

function JumboTron(props) {
  return (
    <div className='jumbotron'>
      <h1>{props.title}</h1>
      <p className='lead'>{props.content}</p>
    </div>
  );
}

export default JumboTron;

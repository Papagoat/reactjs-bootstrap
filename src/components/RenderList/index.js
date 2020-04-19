import React from 'react';
import Button from '../Button/Button';

const RenderList = (props, list) => {
  return (
    <ul>
      {props.listItems ? (
        <h2>{props.listItems.value}</h2>
      ) : (
        <h2>Select an answer</h2>
      )}
      {list.map((item) => (
        <li key={item.id} className='my-3'>
          {item.title}
          <Button
            className='ml-2 btn btn-sm btn-primary'
            name='View Answer &raquo;'
            onClick={() => props.selectItem(item)}
          />
        </li>
      ))}
    </ul>
  );
};

export default RenderList;

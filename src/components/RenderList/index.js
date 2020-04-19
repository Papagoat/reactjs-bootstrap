import React from 'react';
import Button from '../Button/Button';

const RenderList = (props, selectedList, list, action) => {
  return (
    <ul>
      {props.listItems && props.listItems.selectedList ? (
        <h2>{props.listItems.selectedList.value}</h2>
      ) : (
        <h2>Select an answer</h2>
      )}
      {props.list.map((item) => (
        <li key={item.id} className='my-3'>
          {item.title}
          <Button
            className='ml-2 btn btn-sm btn-primary'
            name='View Answer &raquo;'
            onClick={() => props.selectItem(action, item)}
          />
        </li>
      ))}
    </ul>
  );
};

export default RenderList;

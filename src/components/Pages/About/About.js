import React from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../../../actions';
import JumboTron from '../../JumboTron';
import './About.css';
import Button from '../../Button/Button';

const RenderList = (props) => {
  return (
    <ul>
      {props.listItems && props.listItems.aboutListSelected ? (
        <h2>{props.listItems.aboutListSelected.value}</h2>
      ) : (
        <h2>Select an answer</h2>
      )}
      {props.aboutList.map((item) => (
        <li key={item.id} className='my-3'>
          {item.title}
          <Button
            className='ml-2 btn btn-sm btn-primary'
            name='View Answer &raquo;'
            onClick={() => props.selectItem('ABOUTLIST_SELECTED', item)}
          />
        </li>
      ))}
    </ul>
  );
};

function About(props) {
  return (
    <div>
      <main role='main' className='container'>
        <JumboTron
          title='About Page'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore consectetur nisi odit maiores vero expedita laboriosam quis ipsam. Nesciunt voluptatibus quam provident nisi illum modi maxime quas illo assumenda.'
        />
        {RenderList(props, props.aboutList)}
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    aboutList: state.aboutList,
    listItems: state.listItems,
  };
};

export default connect(mapStateToProps, { selectItem })(About);

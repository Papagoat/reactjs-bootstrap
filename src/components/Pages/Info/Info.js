import React from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../../../actions';
import JumboTron from '../../JumboTron';
import RenderList from '../../RenderList';
import './Info.css';

import Button from '../../Button/Button';

function Info(props) {
  const { infoList } = props;
  return (
    <div>
      <main role='main' className='container'>
        <JumboTron
          title='Info Page'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore consectetur nisi odit maiores vero expedita laboriosam quis ipsam. Nesciunt voluptatibus quam provident nisi illum modi maxime quas illo assumenda.'
        />
        {RenderList(props, infoList)}
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    infoList: state.infoList,
    listItems: state.listItems,
  };
};

export default connect(mapStateToProps, { selectItem })(Info);

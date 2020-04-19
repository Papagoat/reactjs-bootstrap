import { combineReducers } from 'redux';

const homeList = () => {
  return [
    {
      id: 1,
      title: 'Which way did the programmer go?',
      value: 'He went data way!',
    },
    {
      id: 2,
      title: 'What do programmers dance to?',
      value: 'Algorhythms.',
    },
    {
      id: 3,
      title: 'How programmers curse?',
      value: 'Oh shift!',
    },
    {
      id: 4,
      title: 'Why do programmers only go outside during the winter?',
      value: `Because it's code outside.`,
    },
  ];
};

const aboutList = () => {
  return [
    {
      id: 1,
      title: 'Why was the programmer always running into walls?',
      value: 'He couldn’t see sharp.',
    },
    {
      id: 2,
      title: 'Why was the Asian Dad always disappointed in the programmer kid?',
      value: 'All he knew was C++.',
    },
    {
      id: 3,
      title: 'Beware of the grumpy Programmer.',
      value: 'He may byte.',
    },
    {
      id: 4,
      title: 'How many Programmers does it take to change a light bulb?',
      value: `None, it’s a hardware problem.`,
    },
  ];
};

const infoList = () => {
  return [
    {
      id: 1,
      title: `Why don't programmers like nature?`,
      value: `There's too many bugs.`,
    },
    {
      id: 2,
      title: 'I got two jokes for the programmer dads.',
      value: '10.',
    },
    {
      id: 3,
      title: 'A hungry computer programmer...',
      value: 'takes mega-bytes.',
    },
    {
      id: 4,
      title: 'Why did the programmers girlfriend leave him?',
      value: 'He had problems committing.',
    },
  ];
};

const listItems = (selectedItem = null, action) => {
  switch (action.type) {
    case 'HOMELIST_SELECTED':
      return {
        homeListSelected: action.homeListSelected,
      };
    case 'ABOUTLIST_SELECTED':
      return {
        aboutListSelected: action.aboutListSelected,
      };
    case 'INFOLIST_SELECTED':
      return {
        infoListSelected: action.infoListSelected,
      };
    default:
      return selectedItem;
  }
};

export default combineReducers({
  homeList,
  aboutList,
  infoList,
  listItems,
});

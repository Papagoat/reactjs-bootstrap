import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Smells like Teen Spirit', duration: '4:05' },
    { title: 'Jeremy', duration: '4:00' },
    { title: 'I want it that way', duration: '3.98' },
    { title: 'Come on Eileen', duration: '4:25' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

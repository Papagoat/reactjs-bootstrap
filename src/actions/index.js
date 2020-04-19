// Action creator
export const selectItem = (item) => {
  // Return an action
  return {
    type: 'LIST_SELECTED',
    payload: item,
  };
};

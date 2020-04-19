// Action creator
export const selectItem = (type, payload) => {
  // Return an action
  switch (type) {
    case 'HOMELIST_SELECTED':
      return {
        type,
        homeListSelected: payload,
      };
    case 'ABOUTLIST_SELECTED':
      return {
        type,
        aboutListSelected: payload,
      };
    case 'INFOLIST_SELECTED':
      return {
        type,
        infoListSelected: payload,
      };
    default:
      return {
        type,
        homeListSelected: payload,
      };
  }

  // return {
  //   type: 'LIST_SELECTED',
  //   payload: item,
  // };
};

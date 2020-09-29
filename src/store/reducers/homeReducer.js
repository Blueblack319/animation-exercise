import actionTypes from "../actions/actionTypes";

const initState = {
  list: [],
};

const addItem = (state, action) => {
  const newItem = {
    content: action.content,
    id: new Date(),
  };
  return {
    list: state.list.concat(newItem),
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return addItem(state, action);
    case actionTypes.REMOVE_ITEM:
      return {
        list: state.list.filter((item) => {
          return item.id !== action.id;
        }),
      };
    default:
      return state;
  }
};

export default reducer;

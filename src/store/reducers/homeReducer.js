import actionTypes from "../actions/actionTypes";

const initState = {
  list: [],
};

const addItem = (state, action) => {
  const newItem = {
    content: action.content,
    id: Math.floor(Math.random() * 100),
  };
  return {
    list: state.list.concat(newItem),
  };
};

const reducer = (state = initState, action) => {
  console.log(typeof state.list);
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return addItem(state, action);
    case actionTypes.REMOVE_ITEM:
      return {
        list: state.list.filter((item) => item.id !== action.key),
      };
    default:
      return state;
  }
};

export default reducer;

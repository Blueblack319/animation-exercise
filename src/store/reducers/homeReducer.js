import actionTypes from "../actions/actionTypes";

const initState = {
  list: [1, 2, 3],
};

const reducer = (state = initState, action) => {
  console.log(typeof state.list);
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        list: [...state.list].concat(action.item),
      };
    default:
      return state;
  }
};

export default reducer;

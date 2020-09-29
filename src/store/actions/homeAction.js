import actionTypes from "./actionTypes";

export const addItem = (item) => {
  return {
    type: actionTypes.ADD_ITEM,
    item,
  };
};

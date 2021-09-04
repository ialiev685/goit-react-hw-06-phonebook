import { combineReducers } from "redux";

import actionType from "./contacts-type";

// const initialItems = {
//   items: [],
// };

const items = (state = [], action) => {
  console.log("reducer", state);
  switch (action.type) {
    case actionType.add:
      return [action.payload, ...state];

    case actionType.detele:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};

const filter = (state = "", action) => {
  console.log("filter", state);
  switch (action.type) {
    case actionType.get_filter:
      return action.payload;
    default:
      return state;
  }
};

export const contacts = combineReducers({
  items,
  filter,
});

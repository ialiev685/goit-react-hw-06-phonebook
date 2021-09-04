import { combineReducers } from "redux";

import actionType from "./contacts-type";

const items = (state = [], action) => {
  switch (action.type) {
    case actionType.add:
      return [action.payload, ...state];

    case actionType.delete:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};

const filter = (state = "", action) => {
  switch (action.type) {
    case actionType.get_filter:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});

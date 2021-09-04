import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-action";

// import actionType from "./contacts-type";

// const items = (state = [], action) => {
//   switch (action.type) {
//     case actionType.add:
//       return [action.payload, ...state];

//     case actionType.delete:
//       return state.filter(({ id }) => id !== action.payload);
//     default:
//       return state;
//   }
// };

const items = createReducer([], {
  [actions.addItem]: (state, action) => [action.payload, ...state],
  [actions.deleteItem]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

// const filter = (state = "", action) => {
//   switch (action.type) {
//     case actionType.get_filter:
//       return action.payload;
//     default:
//       return state;
//   }
// };

const filter = createReducer("", {
  [actions.getFilterItems]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

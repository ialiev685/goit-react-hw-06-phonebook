// import actionType from "./contacts-type";

import { createAction } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

// export const addItem = (item) => {
//   return {
//     type: actionType.add,
//     payload: {
//       id: uuidv4(),
//       ...item,
//     },
//   };
// };

export const addItem = createAction("contacts/add", (item) => ({
  payload: {
    id: uuidv4(),
    ...item,
  },
}));

// export const deleteItem = (itemId) => {
//   return {
//     type: actionType.delete,
//     payload: itemId,
//   };
// };

export const deleteItem = createAction("contacts/delete");

// export const getFilterItems = (searchName) => {
//   return {
//     type: actionType.get_filter,
//     payload: searchName,
//   };
// };

export const getFilterItems = createAction("contacts/getFilter");

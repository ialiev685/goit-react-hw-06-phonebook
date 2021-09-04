import actionType from "./contacts-type";
import { v4 as uuidv4 } from "uuid";

export const addItem = (item) => {
  return {
    type: actionType.add,
    payload: {
      id: uuidv4(),
      ...item,
    },
  };
};
export const deleteItem = (itemId) => {
  return {
    type: actionType.add,
    payload: itemId,
  };
};

export const getFilterItems = (searchName) => {
  return {
    type: actionType.get_filter,
    payload: searchName,
  };
};

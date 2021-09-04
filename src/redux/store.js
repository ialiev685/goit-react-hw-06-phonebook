import { createStore, combineReducers } from "redux";
import { contacts } from "./phonebook/contacts-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  contacts,
});

export const store = createStore(rootReducer, composeWithDevTools());

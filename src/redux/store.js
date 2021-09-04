// import { createStore, combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import contacts from "./phonebook/contacts-reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const persistedReducer = persistReducer(persistConfig, contacts);

// export const store = createStore(persistedReducer, composeWithDevTools());

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
export const persistor = persistStore(store);

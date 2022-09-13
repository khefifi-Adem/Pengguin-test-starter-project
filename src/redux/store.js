import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme.slice";
import searchReducer from "./search.slice"

const rootReducer = {
  theme: themeReducer,
  search: searchReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

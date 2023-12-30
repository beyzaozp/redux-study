import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter'
import siteReducer from './site'
import authReducer from './auth'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    site: siteReducer,
    auth: authReducer,
  },
});

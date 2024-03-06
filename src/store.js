import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./redux/eventSlice";
import authReducer from "./redux/authSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventReducer,
  },
});

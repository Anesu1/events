import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./redux/eventSlice";
import authReducer from "./redux/authSlice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    auth: authReducer
  },
});

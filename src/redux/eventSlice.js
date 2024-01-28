import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventService from "./eventService";

const initialState = {
  events: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Create an Event
export const addEvent = createAsyncThunk(
  "events/add",
  async (event, thunkAPI) => {
    try {
      return await eventService.addEvent(event);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//get events of the one logged in
export const getEvents = createAsyncThunk("events", async (events, thunkAPI) => {
  try {
    return await eventService.getEvents(events);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    eventReset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    editEvent: (state, action) => {
      // Add logic to edit an event
    },
    deleteEvent: (state, action) => {
      // Add logic to delete an event
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.fulfilled, (state, action) => {
        state.events = action.payload;
      })
      .addCase(addEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
        state.isSuccess = true;
      })
      .addCase(addEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { eventReset, editEvent, deleteEvent } = eventsSlice.actions;

export default eventsSlice.reducer;

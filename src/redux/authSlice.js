import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//get user from localstorage
const userToken = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: null,
  token: userToken ? userToken : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Register User
export const register = createAsyncThunk(
  "users/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
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

//Login User
export const login = createAsyncThunk(
  "users/login",
  async (user, thunkAPI) => {
    try {
      
      return await authService.login(user);
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

export const getUser = createAsyncThunk("users/user-details", async (user, thunkAPI) => {
  try {
    return await authService.getUser(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
  
});



export const logout = createAsyncThunk("users/logout", async () => {
    await authService.logout()
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      
    },
  },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
                
        })
            .addCase(register.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
        })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
        })
            .addCase(login.pending, (state) => {
                state.isLoading = true
                
        })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
              state.isSuccess = true
              state.user = true;
        })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(logout.fulfilled, (state) => {
              state.user = null
              state.userToken = null
            })
          .addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload
          })
         
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

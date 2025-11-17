import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create action
export const createUser = createAsyncThunk(
  "user/createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://6919ca519ccba073ee93ecd1.mockapi.io/crud",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        return rejectWithValue("Failed to create user");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//read action
export const showUser = createAsyncThunk(
  "showUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://6919ca519ccba073ee93ecd1.mockapi.io/crud"
      );

      if (!response.ok) {
        return rejectWithValue("Failed to show users");
      }

      const result = await response.json();
      return result; // this is an array
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


//--------------------------------------------------------------
export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users =action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default userDetail.reducer;

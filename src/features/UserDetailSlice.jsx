import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create action
export const createUser = createAsyncThunk(
  "createUser", //action name
  async (data, { rejectWithValue }) => { //rejectWithValue is used to return the error message if the request fails 
    try {
      const response = await fetch(
        "https://6919ca519ccba073ee93ecd1.mockapi.io/crud",
        {
          method: "POST",
          headers: {  //headers is used to specify the type of data we are sending
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), //data is converted to json format 
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

//delete action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://6919ca519ccba073ee93ecd1.mockapi.io/crud/${id}`,
        { method: "DELETE" }
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

// edit action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://6919ca519ccba073ee93ecd1.mockapi.io/crud/${data.id}`,
        {
          method: "PUT",
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
//--------------------------------------------------------------
export const userDetail = createSlice({  //create slice combines creation of actions and reducers into a single function
  name: "userDetail",  // it takes am object with a slice name, an initial state, adn an object of reducers. it will automatically generate action creator and an action type for you
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData : []
  },

  reducers : {
    searchUser : (state,action) => {
      state.searchData = action.payload
    }
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
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;

        const { id } = action.payload;

        if (id) {
          state.users = state.users.filter((item) => item.id !== id);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userDetail.reducer;

export const {searchUser} = userDetail.actions

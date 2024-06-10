import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await axios.get('http://localhost:5000/users');
  return response.data;
});


export const addUser = createAsyncThunk('users/signUp', async (newUser, { dispatch }) => {
  const response = await axios.post('http://localhost:5000/users', newUser);
  dispatch(loginSuccess(response.data));
  return response.data;
});

export const updateUser = createAsyncThunk('user/updateUser', async (updatedUser) => {
  await axios.put(`http://localhost:5000/users/${updatedUser.id}`, updatedUser);
  return updatedUser;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    user: null,
    error: null,
    status: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
    loginUser2: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        const index = state.users.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      });
  },
});

export const { loginUser2, logoutUser } = userSlice.actions;

export const { loginSuccess, loginFailure } = userSlice.actions;

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/users');
    const users = response.data;
    const user = users.find(
      (user) => user.email === credentials.email && user.password === credentials.password
    );

    if (user) {
      dispatch(loginSuccess(user));
    } else {
      dispatch(loginFailure('Invalid email or password'));
    }
  } catch (error) {
    dispatch(loginFailure('Error fetching users'));
  }
};

export default userSlice.reducer;

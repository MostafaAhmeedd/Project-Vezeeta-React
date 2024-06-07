import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await axios.get('http://localhost:5000/users');
  return response.data;
});
// export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
//     const res = await axios.get('http://localhost:5000/movies');
//     return res.data;
//   });
export const addUser = createAsyncThunk('users/signUp', async (newUser, { dispatch }) => {
    await axios.post('http://localhost:5000/users', newUser);
    dispatch(fetchUsers());
  });

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    status: null,
  },
  reducers: {},
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
      });
  },
});

export default userSlice.reducer;

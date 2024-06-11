import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addDoctorAsync = createAsyncThunk('addDoctor/addDoctorAsync', async (doctor) => {
  const response = await fetch('http://localhost:4000/doctors', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(doctor),
  });
  return response.json();
});

const addDoctorSlice = createSlice({
  name: 'addDoctor',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addDoctorAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addDoctorAsync.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(addDoctorAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default addDoctorSlice.reducer;

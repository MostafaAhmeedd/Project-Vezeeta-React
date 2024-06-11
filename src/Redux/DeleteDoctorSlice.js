import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDoctors = createAsyncThunk('deleteDoctor/fetchDoctors', async () => {
  const response = await fetch('http://localhost:4000/doctors');
  const data = await response.json();
  return data;
});

export const deleteDoctorAsync = createAsyncThunk('deleteDoctor/deleteDoctorAsync', async (id) => {
  const response = await fetch(`http://localhost:4000/doctors/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return id;
});

const deleteDoctorSlice = createSlice({
  name: 'deleteDoctor',
  initialState: {
    status: 'idle',
    error: null,
    doctors: [],
  },
  reducers: {
    setDoctors(state, action) {
      state.doctors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteDoctorAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteDoctorAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.doctors = state.doctors.filter(doctor => doctor.id !== action.payload);
      })
      .addCase(deleteDoctorAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setDoctors } = deleteDoctorSlice.actions;
export default deleteDoctorSlice.reducer;

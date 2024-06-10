import { configureStore } from '@reduxjs/toolkit';
import addDoctorReducer from './AddDoctorSlice';
import deleteDoctorReducer from './DeleteDoctorSlice';

const store = configureStore({
  reducer: {
    addDoctor: addDoctorReducer,
    deleteDoctor: deleteDoctorReducer,
  },
});

export default store;

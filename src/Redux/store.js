import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import SearchDetailsReducer from './Slices/SearchDetails';
import SearchFilteredDoctorsReducer from './Slices/SearchFilteredDoctors';
import userReducer from './Slices/User';
import addDoctorReducer from './Slices/AddDoctorSlice';
import deleteDoctorReducer from './Slices/DeleteDoctorSlice';


const rootReducer = combineReducers({
  SearchDetails: SearchDetailsReducer,
  FilteredDoctorsData: SearchFilteredDoctorsReducer,
  user: userReducer,
  addDoctor: addDoctorReducer,
  deleteDoctor: deleteDoctorReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
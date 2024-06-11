import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../Redux/store';
import UserAppointments from '../Components/UserAppointments';
import NavBarPage from '../Pages/NavBarPage';
import HomePage from '../Pages/HomePage';
import Doctors from '../Components/Doctors';
import SignUpPage from '../Pages/SignUpPage';
import LoginPage from '../Pages/LoginPage';
import ForDoctorPage from '../Pages/ForDoctorPage';
import ProfilePage from '../Pages/ProfilePage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavBarPage />
        <div className="App">

          <PersistGate loading={null} persistor={persistor}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signUp" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/ForDoc" element={<ForDoctorPage />} />
              {/* <Route path="/ContactUs" element={<ContactUsPage/>} /> */}
              <Route path="/Profile" element={<ProfilePage />} />
              <Route path="/appointments" element={<UserAppointments />} />
              <Route path="/filtered_doctors" element={<Doctors />} />
            </Routes>
          </PersistGate>
        </div>
      </Provider>

    </BrowserRouter >
  );
}

export default App;

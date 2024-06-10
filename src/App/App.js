import HomePage from '../Pages/HomePage';
import Doctors from '../Components/Doctors';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../Redux/store';
import UserAppointments from '../Components/UserAppointments';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/appointments" element={<UserAppointments />} />
              <Route path="/filtered_doctors" element={<Doctors />} />
            </Routes>
          </PersistGate>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;

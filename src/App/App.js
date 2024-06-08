import SearchPage from '../Pages/SearchPage';
import Doctors from '../Components/Doctors';
import logo from '../logo.svg';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../Redux/store';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes>
              <Route path="/" element={<SearchPage/>} />
              <Route path="/filtered_doctors" element={<Doctors />} />
            </Routes>
          </PersistGate>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;

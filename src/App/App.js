import SearchPage from '../Pages/SearchPage';
import Doctors from '../Components/Doctors';
import logo from '../logo.svg';
import { Provider } from 'react-redux';
import store from '../Redux/store'

import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
 

    <div className="App">

      <Provider store={store}>

      <Routes>
            <Route path="/" element={<SearchPage></SearchPage>}></Route>
            <Route path="/filtered_doctors" element={<Doctors></Doctors>}></Route>
            </Routes>

        </Provider>
        


    </div>

    </BrowserRouter>
  );
}

export default App;

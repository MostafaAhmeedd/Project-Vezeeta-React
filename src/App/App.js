import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBarPage from '../Pages/NavBarPage';
import Home from '../Components/Home';
import SignUpPage from '../Pages/SignUpPage';
import LoginPage from '../Pages/LoginPage';
import ContactUsPage from '../Pages/ContactUsPage';
import store from '../Redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBarPage />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/signUp" element={<SignUpPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          {/* <Route path="/ForDoc" element={ForDoc} /> */}
          <Route path="/ContactUs" element={<ContactUsPage/>} />
      
        </Routes>
    </BrowserRouter>
   </Provider>
  );
}

export default App;

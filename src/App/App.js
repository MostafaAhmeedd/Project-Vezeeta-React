import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from '../Components/NavBar';
import Home from '../Components/Home';
import SignUpPage from '../Pages/SignUpPage';
// import SignUp from '../Components/SignUp';
import store from '../Redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/signUp" element={<SignUpPage/>} />
          {/* <Route path="/login" component={Login} />
          <Route path="/ForDoc" component={ForDoc} />
          <Route path="/ContactUs" component={ContactUs} /> */}
      
        </Routes>
    </BrowserRouter>
   </Provider>
  );
}

export default App;

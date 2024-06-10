import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Admin from "../Components/Admin";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="admin" element={<Admin></Admin>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

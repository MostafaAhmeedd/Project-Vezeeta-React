import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import SearchBox from './Components/SearchBox';
import SearchBoxBackground from './Components/SearchBoxBackground';
import SearchPage from './Pages/SearchPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
reportWebVitals();

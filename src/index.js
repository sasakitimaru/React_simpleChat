import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RegistrationForm from './RegistrationForm';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateNewAccount from './CreateNewAccount';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm/>} />
        <Route path="/app" element={<App/>} />
        <Route path="/createnewaccount" element={<CreateNewAccount/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

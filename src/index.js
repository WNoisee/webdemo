import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './Component/User/User';
import Admin from './Component/Amin/Admin';
import Home from './Component/Home/Home';
import Guest from './Component/Guest/Guest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App></App>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='Guest' element={<Guest></Guest>}></Route>
          <Route path='User' element={<User></User>}></Route>
          <Route path='Admin' element={<Admin></Admin>}></Route> 
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

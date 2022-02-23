import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Home from './components/Home';
import Detail from './components/Detail';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/* root , not found , all path the same */}
          <Route path="/home" element={<Home/>} />
          <Route path="/detail" element={<Detail/>} />
          {/* detail */}
          {/* fav */}
          <Route path="*" element={<Navigate to='/404' />} />
          <Route path='/404' element={<div>404</div>} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;

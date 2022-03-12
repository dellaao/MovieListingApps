import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Home from './components/Home';
import Detail from './components/Detail';
import { BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Favorite from './components/Favorite';

interface IMovie {
  id:string;
  poster_path:string;
  release_date:string;
  date:string;
  title:string;
  vote_average:string;
  overview:string;
  backdrop_path:string;
}

function App() {
  const [dataMovie, setDataMovie] = useState<IMovie[]>([]);
  return (
    <BrowserRouter>
      <Routes>
          {/* root , not found , all path the same */}
          <Route path="*" element={<Home/>} />
          <Route path="/detail" element={<Detail/>} />
          <Route path="/favorite" element={<Favorite dataMovie={dataMovie}/>} />
          <Route path="*" element={<Navigate to='/404' />} />
          <Route path='/404' element={<div>404</div>} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;

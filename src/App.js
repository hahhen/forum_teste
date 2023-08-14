import React, { useState } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Criar from './pages/Criar';

var [isLight, setLight] = "";
function Light() {
  [isLight, setLight] = useState(true)
}

var [isRetract, retract] = ""

function Retract() {
  [isRetract, retract] = useState(true)
}

function App() {
  Light()
  Retract()
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/criar' element={<Criar />} />
    </Routes>
  );
}

export default App;
export { Light, isLight, setLight, isRetract, retract }

import React, { useState } from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Criar from './pages/Criar';
import { section } from './components/topicInfoSon';
import SectionPage from './pages/SectionPage';

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
      {/* <Route path='/Matemática' element={<SectionPage section9={2}/>} /> */}
      {section.map((info)=>
        <Route path={`/${info.sectionname}`} element={<SectionPage section9={info.sectioncod} />}/>
      )}
    </Routes>
  );
}

export default App;
export { Light, isLight, setLight, isRetract, retract }

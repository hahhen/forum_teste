import React, { useState } from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Criar from './pages/Criar';
import { section, topicInfo } from './components/topicInfoSon';
import SectionPage from './pages/SectionPage';
import TopicPage from './pages/TopicPage';
import { Analytics } from '@vercel/analytics/react';

// Light/Dark mode
var [isLight, setLight] = ""
function LightTrue() {
  [isLight, setLight] = useState(true)
}
function LightFalse() {
  [isLight, setLight] = useState(false)
}

var [isRetract, retract] = ""
function Retract() {
  [isRetract, retract] = useState(true)
}

function App() {
  Retract()
  if(localStorage.getItem('theme') === 'dark'){
    document.documentElement.setAttribute('data-theme', 'dark')
    LightFalse()
  } else if (localStorage.getItem('theme') === 'light'){
    document.documentElement.setAttribute('data-theme', 'light')
    LightTrue()
  }else{
    LightTrue()
  }
  if(!isLight){
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else{
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }

  return (
    <>
    <Analytics/>
    <Routes>
      <Route path='/.well-known/microsoft-identity-association.json' element={"../public/.well-known/microsoft-identity-association.json"}/>
      <Route path="/" element={<Home/>}/>
      <Route path='/criar' element={<Criar />} />
      {section.map((info)=>
        <Route path={`/${info.sectionname}`} element={<SectionPage section9={info.sectioncod} />}/>
      )}
      {topicInfo.map((info)=>
        <Route path={`/topico/${info.title}-${info.topiccod}`} element={<TopicPage topicKey={info} />}/>
      )}
    </Routes>
    </>
  );
}

export default App;
export { isLight, setLight, isRetract, retract }

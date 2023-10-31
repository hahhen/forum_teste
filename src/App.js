import React, { useState } from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Criar from './pages/Criar';
import { section, topicInfo } from './components/topicInfoSon';
import SectionPage from './pages/SectionPage';
import TopicPage from './pages/TopicPage';
import { Analytics } from '@vercel/analytics/react';

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
  if(!isLight){
    document.body.classList = "bdark"
  } else{
    document.body.classList = ""
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
export { Light, isLight, setLight, isRetract, retract }

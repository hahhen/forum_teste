import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Criar from './pages/Criar';
import SectionPage from './pages/SectionPage';
import TopicPage from './pages/TopicPage';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/layout';
import { HelmetProvider } from 'react-helmet-async';
import Footer from './components/footer';
import { SpeedInsights } from "@vercel/speed-insights/react"

// Light/Dark mode
var [isLight, setLight] = ""
function LightTrue() {
  [isLight, setLight] = useState(true)
}
function LightFalse() {
  [isLight, setLight] = useState(false)
}
//Retract sections map
var [isRetract, retract] = ""
function Retract() {
  [isRetract, retract] = useState(true)
}



function App() {
  //Ativa a função que habilita retrair as seções
  Retract()
  //Verifica se há um tema salvo no localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
    LightFalse()
  } else if (localStorage.getItem('theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light')
    LightTrue()
  } else {
    LightTrue()
  }

  //Muda o tema no localStorage e no site
  if (!isLight) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
  
  //Helmet (muda o head da página)
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <SpeedInsights/>
      <Analytics />
      <Routes>
        <Route path='/teste' element={<Footer />}/>
        <Route path='/.well-known/microsoft-identity-association.json' element={"../public/.well-known/microsoft-identity-association.json"} />
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path='/criar' element={<Criar />} />
        <Route path={`/secao/:slug`} element={<Layout><SectionPage /></Layout>} />
        <Route path={`/topico/:slug/:topiccod`} element={<Layout><TopicPage /></Layout>} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
export { isLight, setLight, isRetract, retract }

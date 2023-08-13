import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Sections from './components/sections';
import Feed from './components/feed';
import RecentFeed from './components/recentfeed';
import MediaQuery from 'react-responsive';

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
    <>
      <Header />
      <div className={isLight ? "" : "dark"} >
        <main className="container pt-5">
          <div className='row'>
            <MediaQuery minWidth={1000}>
              <Sections />
            </MediaQuery>
            <Feed />
            <MediaQuery minWidth={1000}>
              <RecentFeed />
            </MediaQuery>
          </div>
        </main>
      </div>
    </>

  );
}

export default App;
export { Light, isLight, setLight, isRetract, retract }

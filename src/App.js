import React, {useState} from 'react';
import './App.css';
import Header from './components/header';
import Sections from './components/sections'
import Feed from './components/feed'
import RecentFeed from './components/recentfeed';

var [isLight, setLight] = "";

function Light(){
  [isLight, setLight] = useState(true)
}

function App() {
  Light()
  return (
    <>
      <Header />
      <div className={isLight? "":"dark"} >
      <main className="container pt-5">
        <div className='row'>
          <Sections />
          <Feed />
          <RecentFeed />
        </div>
      </main>
      </div>
    </>
    
  );
}

export default App;
export {Light, isLight, setLight}

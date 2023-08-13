import React from 'react'
import RecentTopic from './recenttopic'
import {isLight, isRetract} from  '../App'
import './recentfeed.css'

function RecentFeed() {
  return (
    <div id="recent-feed" className={`recent-feed ${isRetract? 'col-3':'col-4'}`}>
        <h5 className={`recent-feed-title ${isLight? "":"dark"}`}>Posts mais recentes</h5>
        <RecentTopic />
    </div>
  )
}

export default RecentFeed
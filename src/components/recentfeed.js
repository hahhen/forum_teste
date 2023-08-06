import React from 'react'
import RecentTopic from './recenttopic'
import {isLight} from  '../App'
import './recentfeed.css'

function RecentFeed() {
  return (
    <div id="recent-feed" className="col-3 recent-feed">
        <h5 className={`recent-feed-title ${isLight? "":"dark"}`}>Posts mais recentes</h5>
        <RecentTopic />
    </div>
  )
}

export default RecentFeed
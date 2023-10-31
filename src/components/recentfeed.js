import React from 'react'
import RecentTopic from './recenttopic'
import { isRetract } from '../App'
import './recentfeed.css'
import { topicInfo } from './topicInfoSon'
import { dayjs } from './dayjsa'

function RecentFeed() {
  const infoS = [...topicInfo]
  infoS.sort((a, b) => (dayjs(a.time).isAfter(dayjs(b.time)) ? -1 : 1))
  return (
    <div id="recent-feed" className={`recent-feed ${isRetract ? 'col-3' : 'col-4'}`}>
      <h5 className={`recent-feed-title`}>Posts mais recentes</h5>
      {infoS.map((info) =>
        <>
          <RecentTopic key={info.topiccod} info={info} />
        </>
      )}
    </div>
  )
}

export default RecentFeed
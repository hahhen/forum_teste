import React from 'react'
import RecentTopic from './recenttopic'
import './recentfeed.css'
import { topicInfo } from './topicInfoSon'
import { dayjs } from './dayjsa'

function RecentFeed() {
  const infoS = [...topicInfo]
  infoS.sort((a, b) => (dayjs(a.time).isAfter(dayjs(b.time)) ? -1 : 1))
  return (
    <div id="recent-feed" className={`recent-feed col-3`}>
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
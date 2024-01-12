import React from 'react'
import Topic from './topic'
import './recentfeed.css'
import { topicInfo } from './topicInfoSon'
import { dayjs } from './dayjsa'

function HomeRecentFeed() {
  var infoS = [...topicInfo]
  infoS.sort((a, b) => (dayjs(a.time).isAfter(dayjs(b.time)) ? -1 : 1))
  return (
    <div className={`recent-feed`}>
      {infoS.map((info) =>
        <>
          <Topic key={info.topiccod} info={info} />
        </>
      )}
    </div>
  )
}

export default HomeRecentFeed
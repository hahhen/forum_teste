import React from 'react'
import RecentTopic from './recenttopic'
import './recentfeed.css'
import { topicInfo } from './topicInfoSon'
import { dayjs } from './dayjsa'

function RecentFeed({section}) {
  var infoS
  { section ? infoS = topicInfo.filter((info) => info.section === section) :  infoS = [...topicInfo] }
  infoS.sort((a, b) => (dayjs(a.time).isAfter(dayjs(b.time)) ? -1 : 1))
  return (
    <div className={`recent-feed ${ section? null: 'pt-3 col-3'}`}>
      { section ? null : <h5 className={`recent-feed-title`}>Tópicos mais recentes</h5> }
      {infoS.map((info) =>
        <>
          <RecentTopic key={info.topiccod} info={info} />
        </>
      )}
    </div>
  )
}

export default RecentFeed
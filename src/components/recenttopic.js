import React from 'react'
import './recenttopic.css'
import { user, section } from './topicInfoSon'
import { Link } from 'react-router-dom'
import { dayjs } from './dayjsa'


function RecentTopic({ info }) {
  return (
    <Link key={info.topiccod} to={`/topico/${info.slug}/${info.topiccod}`} className='text-decoration-none'>
      <div className={`recent-topic`}>
        <div className="recent-topic-header">
          <h6 className="recent-topic-title">{info.title}</h6>
          <span className={`recent-topic-section`}>Em <span className="recent-topic-origin-name">{section[info.section - 1].sectionname}</span></span>
        </div>
        <div className={`recent-topic-info`}>
          <span className="recent-topic-runtime">{dayjs(info.time).fromNow()}</span>
          <span className={`recent-topic-info-aparter`}></span>
          <span className={"recent-topic-author"}>Postado por <span className="recent-topic-author-name">{user[info.author - 1].name}</span></span>
          <span className={`topic-info-aparter`}></span>
          <span className={`privacy-${info.privacy}`}></span>
        </div>
      </div>
    </Link>
  )
}

export default RecentTopic
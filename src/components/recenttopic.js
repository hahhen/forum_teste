import React from 'react'
import './recenttopic.css'
import { topicInfo, user, section } from './topicInfoSon'
import { isLight } from '../App'
import { Link } from 'react-router-dom'
import { dayjs } from './dayjsa'


function RecentPost({info}) {
  return (
    <Link to={`/topico/${info.title}-${info.topiccod}`} className='text-decoration-none'>
        <div key={info.topiccod} className={`recent-topic ${isLight ? "" : "dark"}`}>
          <div className="recent-topic-header">
            <h6 className="recent-topic-title">{info.title}</h6>
            <span className={`recent-topic-section ${isLight ? "" : "dark"}`}>Em <span className="recent-topic-origin-name">{section[info.section-1].sectionname}</span></span>
          </div>
          <div className={`recent-topic-info ${isLight ? "" : "dark"}`}>
            <span className="recent-topic-runtime">{dayjs(info.time).fromNow()}</span>
            <span className={`recent-topic-info-aparter ${isLight ? "" : "dark"}`}></span>
            <div>
              <span className="recent-topic-author">Postado por <span className="topic-author-name">{user[info.author - 1].name}</span></span>
            </div>
          </div>
        </div>
    </Link>
  )
}

export default RecentPost
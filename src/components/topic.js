import React from 'react'
import './topic.css'
import { topicInfo, user, flairHolder, flair } from './topicInfoSon'
import { isLight } from '../App'
import { dayjs } from './dayjsa'
import { Link } from 'react-router-dom'
import TopicPage from '../pages/TopicPage'


function Topic({ info }) {
  return (
    <Link to={`/topico/${info.title}-${info.topiccod}`} className='text-decoration-none'>
      <div key={info.topiccod} className={`topic ${isLight ? "" : "dark"}`}>
        <h5 className="topic-title">{info.title}</h5>
        <div className={`topic-info ${isLight ? "" : "dark"}`}>
          <span title={info.time} className="topic-runtime">{dayjs(info.time).fromNow()}</span>
          <span className={`topic-info-aparter ${isLight ? "" : "dark"}`}></span>
          <div>
            <span className="topic-author">Postado por <span className="topic-author-name">{user[info.author - 1].name}</span></span>
            {flairHolder.map((flairH) =>
              flairH.usercod === info.author ? <span className={`flair flair-${flair[flairH.flaircod - 1].name}`}>{flair[flairH.flaircod - 1].name}</span> : null
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Topic
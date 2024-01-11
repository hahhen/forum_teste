import React from 'react'
import './topic.css'
import { user, flairHolder, flair } from './topicInfoSon'
import { dayjs } from './dayjsa'
import { Link } from 'react-router-dom'


function Topic({ info }) {
  return (
    <Link to={`/topico/${info.slug}/${info.topiccod}`} className='text-decoration-none'>
      <div key={info.topiccod} className={`topic`}>
        <h5 className="topic-title">{info.title}</h5>
        <div className={`topic-info`}>
          <span title={info.time} className="topic-runtime">{dayjs(info.time).fromNow()}</span>
          <span className={`topic-info-aparter`}></span>
          <div>
            <span className="topic-author">Postado por</span><span className="topic-author-name">{user[info.author - 1].name}</span>
            {flairHolder.map((flairH) =>
              flairH.usercod === info.author ? <span className={`flair flair-${flair[flairH.flaircod - 1].name}`}>{flair[flairH.flaircod - 1].name}</span> : null
            )}
          </div>
          <span className={`topic-info-aparter`}></span>
          <span className={`privacy-${info.privacy}`}></span>
        </div>
      </div>
    </Link>
  )
}

export default Topic
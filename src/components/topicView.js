import React from 'react'
import { isLight } from '../App'
import { topicInfo, author, section, flair, user, flairHolder } from './topicInfoSon'
import { dayjs } from './dayjsa'

function TopicView({ topicKey }) {
  return (
    <div>
      <div>
        <div className='d-flex align-items-baseline'>
          <h4>{topicKey.title}</h4>
          <span className={`recent-topic-section ${isLight ? "" : "dark"}`}>Em <span className="recent-topic-origin-name">{section[topicKey.section - 1].sectionname}</span></span>
        </div>
        <div>
          <span className="topic-author"><span className="topic-author-name">{user[topicKey.author - 1].name}</span></span>
          {flairHolder.map((flairH) =>
            flairH.usercod === topicKey.author ? <span className={`flair flair-${flair[flairH.flaircod - 1].name}`}>{flair[flairH.flaircod - 1].name}</span> : null
          )}
          <span title={topicKey.time} className="topic-runtime">{dayjs(topicKey.time).fromNow()}</span>
        </div>
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{__html: topicKey.body}} id='topicBody'>
          
      </div>
    </div>

  )
}

export default TopicView
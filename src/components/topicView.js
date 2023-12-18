import React from 'react'
import { isLight } from '../App'
import { topicInfo, section, flair, user, flairHolder } from './topicInfoSon'
import { dayjs } from './dayjsa'
import './topicView.css'

function TopicView({ topiccod }) {
  console.log(topiccod)
  const topicKey = topicInfo[topiccod - 1]; 
  console.log(topicKey)
  return (
    <div>
      <div>
        <div className='d-flex align-items-baseline'>
          <h4 className={`topicview-title ${isLight ? "" : "dark"}`}>{topicKey.title}</h4>
          <span className={`topicview-section`}>Em <span className="topicview-origin-name">{section[topicKey.section - 1].sectionname}</span></span>
        </div>
        <div className='d-flex'>
          <div className='d-flex align-items-center'>
            <span className={`topicview-author ${isLight ? "" : "dark"}`}>{user[topicKey.author - 1].name}</span>
            {flairHolder.map((flairH) =>
              flairH.usercod === topicKey.author ? <span className={`flair flair-${flair[flairH.flaircod - 1].name}`}>{flair[flairH.flaircod - 1].name}</span> : null
            )}
          </div>
          <div className='topicview-info d-flex align-items-center'>
            <span className={`topicview-info-aparter `}></span>
            <span title={topicKey.time} className={`topicview-runtime`}>{dayjs(topicKey.time).fromNow()}</span>
          </div>
        </div>
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: topicKey.body }} id='topicviewbody' className={`topicviewbody ${isLight ? '' : 'dark'}`}></div>
    </div>

  )
}

export default TopicView
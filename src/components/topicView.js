import React from 'react'
import { isLight } from '../App'
import { topicInfo, section, flair, user, flairHolder } from './topicInfoSon'
import { dayjs } from './dayjsa'
import './topicView.css'
import LikeButton from './likebutton'
import CommentButton from './commentbutton'
import ShareButton from './sharebutton'

function TopicView({ description, gtitle, creator, topiccod }) {
  console.log(topiccod - 1)
  const topicKey = topicInfo[topiccod - 1];
  console.log(topicKey)
  return (
    <div>
      <div>
        <div className='d-flex align-items-baseline mb-2 flex-wrap'>
          <h4 className={`topicview-title mb-0 me-2`}>{topicKey.title}</h4>
          <span className={`topicview-section mt-1`}>Em <span className="topicview-origin-name">{section[topicKey.section - 1].sectionname}</span></span>
        </div>
        <div className='d-flex align-items-center'>
          <img className='me-2 rounded-circle' src={user[topicKey.author - 1].photo} width={40} height={40} />
          <div className='d-flex flex-column'>
            <div>
              <span className={`topicview-author`}>{user[topicKey.author - 1].name}</span>
              {flairHolder.map((flairH) =>
                flairH.usercod === topicKey.author ? <span className={`flair flair-${flair[flairH.flaircod - 1].name}`}>{flair[flairH.flaircod - 1].name}</span> : null
              )}
            </div>
            <div className='topicview-info d-flex align-items-center'>
              <span title={topicKey.time} className={`topicview-runtime`}>{dayjs(topicKey.time).fromNow()}</span>
              <span className={`topic-info-aparter`}></span>
              <span className={`privacy-${topicKey.privacy}`}></span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: topicKey.body }} id='topicviewbody' className={`topicviewbody ${isLight ? '' : 'dark'}`}></div>
      <hr />
      <div className='mb-3 d-flex justify-content-between'>
        <div className='d-flex justify-content-between'>
          <LikeButton info={topicKey} />
          <CommentButton info={topicKey} />
        </div>
        <div className='d-flex justify-content-end'>
          <ShareButton description={description} gtitle={gtitle} creator={creator} info={topicKey} />
        </div>
      </div>
    </div>

  )
}

export default TopicView
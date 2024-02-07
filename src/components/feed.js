import React from 'react'
import Topic from './topic'
import { section, topicInfo } from './topicInfoSon'
import { Link } from 'react-router-dom';

import './feed.css'


function Feed({ section1, s }) {
  return (
    <>
      <div className='mb-5'>
        <div className='d-flex align-items-center mb-2'>
          <h5 className={`m-0 feed-title`}>{section[section1 - 1].sectionname}</h5>
          {s ?
            <Link to="/Criar" state={{from: section1}} id='post-button' className='post-button ms-3 btn btn-primary'>Criar tópico</Link>
            : ''}
        </div>


        {topicInfo.map((info) =>
          <>
            {info.section === section1 ?
              <Topic info={info} />
              : ''}
          </>
        )}
      </div >
    </>
  )
}

export default Feed 
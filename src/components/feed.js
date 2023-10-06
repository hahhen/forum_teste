import React from 'react'
import Topic from './topic'
import { section } from './topicInfoSon'
import { Link} from 'react-router-dom';
import {isLight, setLight} from '../App'

import './feed.css'


function Feed({ section1, s }) {
  return (
    <div className='mb-5'>
      <div className='d-flex align-items-center mb-2'>
        <h4 className={`m-0 feed-title${isLight ? '':' dark'}`}>{section[section1 - 1].sectionname}</h4>
        {s ?
          <Link to={"/Criar"} id='post-button' className='post-button ms-3 btn btn-primary'>Criar tópico</Link>
        : ''}
      </div>
      <Topic section={section1} />
    </div>
  )
}

export default Feed 
import React from 'react'
import Topic from './topic'
import { isRetract } from '../App'
import MediaQuery from 'react-responsive'

function Feed() {
  return (
    <>
      <MediaQuery minWidth={1000}>
        <div id='feed' className={`feed ${isRetract ? 'col-6' : 'col-7'}`}>
          <Topic />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={999}>
        <div id='feed' className={`feed col-12`}>
          <Topic />
        </div>
      </MediaQuery>
    </>
  )
}

export default Feed 
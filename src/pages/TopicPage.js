import React from 'react'
import Header from '../components/header';
import Sections from '../components/sections';
import RecentFeed from '../components/recentfeed';
import MediaQuery from 'react-responsive';
import { isRetract } from '../App';
import PageView from '../components/topicView.js'

function TopicPage({topicKey}){
    return (
        <>
            <Header />
            <main className="container pt-5">
                <div className='row'>
                    <MediaQuery minWidth={1000}>
                        {isMobile => (
                            <>
                                {isMobile ? <Sections /> : ''}
                                <div id='feed' className={`${isMobile ? `feed ${isRetract ? 'col-6' : 'col-8'}` : `feed col-12`}`}>
                                <PageView topicKey={topicKey}/>
                                </div>
                                {isMobile ? <RecentFeed /> : ''}
                            </>
                        )}
                    </MediaQuery>
                </div>
            </main>
        </>
    )
}

export default TopicPage
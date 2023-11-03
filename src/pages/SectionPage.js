import React from 'react'
import Header from '../components/header';
import Sections from '../components/sections';
import Feed from '../components/feed';
import RecentFeed from '../components/recentfeed';
import MediaQuery from 'react-responsive';
import { isRetract } from '../App';

function SectionPage({ section9 }) {
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
                                    <Feed section1={section9} s={true} />
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

export default SectionPage
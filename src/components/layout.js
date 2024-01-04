import React, { Children } from 'react'
import Header from '../components/header';
import Sections from './sectionsmap';
import RecentFeed from '../components/recentfeed';
import MediaQuery from 'react-responsive';
import { isRetract } from '../App';

function Layout({children}) {
    return (
        <>
            <Header />
            <main className="container pt-4 mt-2">
                <div className='row'>
                    <MediaQuery minWidth={1000}>
                        {isMobile => (
                            <>
                                {isMobile ? <Sections /> : ''}
                                <div id='feed' className={`pt-3 ${isMobile ? `feed ${isRetract ? 'col-6' : 'col-8'}` : `feed col-12`}`}>
                                    {children}
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

export default Layout
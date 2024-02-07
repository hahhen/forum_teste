import React from 'react'
import Header from '../components/header';
import Sections from './sectionsmap';
import RecentFeed from '../components/recentfeed';
import MediaQuery from 'react-responsive';
import { isRetract } from '../App';
import './layout.css';
import Footer from './footer';
import * as Separator from '@radix-ui/react-separator'

function Layout({children}) {
    return (
        <>
            <Header />
            <main id='main' className="container pt-4 mt-2">
                <div className='row'>
                    <MediaQuery minWidth={1000}>
                        {isMobile => (
                            <>
                                {isMobile ? <Sections /> : ''}
                                <div id='feed' className={`pt-3 ${isMobile ? `feed ${isRetract ? 'col-6' : 'col-8'}` : `feed col-12`}`}>
                                    {children}
                                </div>
                                {isMobile ? <div id='right-main' className='pt-3 col-3'>
                                    <RecentFeed />
                                    <Separator.Root className="SeparatorRoot" style={{ margin: '1rem 0' }} />
                                    <Footer />
                                </div> : ''}
                            </>
                        )}
                    </MediaQuery>
                </div>
            </main>
        </>
    )
}

export default Layout
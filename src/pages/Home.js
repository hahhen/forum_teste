import React from 'react'
import Header from '../components/header';
import Sections from '../components/sections';
import Feed from '../components/feed';
import RecentFeed from '../components/recentfeed';
import MediaQuery from 'react-responsive';
import { isLight } from '../App';

function Home() {
    return (
        <>
            <Header />
            <div className={isLight ? "" : "dark"} >
                <main className="container pt-5">
                    <div className='row'>
                        <MediaQuery minWidth={1000}>
                            <Sections />
                        </MediaQuery>
                        <Feed />
                        <MediaQuery minWidth={1000}>
                            <RecentFeed />
                        </MediaQuery>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home
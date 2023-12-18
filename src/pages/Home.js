import React from 'react'
import Feed from '../components/feed';
import Section from '../components/sectionshomedropdown';

function Home() {
    return (
        <>
            <Feed section1={1}/>
            <Section />
        </>
    )
}

export default Home
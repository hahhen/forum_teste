import React from 'react'
import Feed from '../components/feed';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { section } from '../components/topicInfoSon';

function SectionPage() {
    const { slug } = useParams();
    const index = section.findIndex(section => section.slug === slug)
    const section9 = section[index].sectioncod
    console.log(section9)
    return (
        <Feed section1={section9} s={true} />
    )
}

export default SectionPage
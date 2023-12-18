import React from 'react'
import PageView from '../components/topicView.js'
import { useParams } from 'react-router-dom'

function TopicPage() {
    const { topiccod } = useParams();
    return (
        <PageView topiccod={topiccod} />
    )
}

export default TopicPage
import React from 'react'
import TopicView from '../components/topicView.js'
import { useParams } from 'react-router-dom'
import { topicInfo, user } from '../components/topicInfoSon'
import { Helmet } from 'react-helmet-async';

function TopicPage() {
    const { topiccod } = useParams();
    const gtitle = `${topicInfo[topiccod - 1].title}`
    const description = topicInfo[topiccod - 1].body.substring(0, 160) + '...'
    const creatorcod = topicInfo[topiccod - 1].author
    const creator = user[creatorcod - 1].name
    return (
        <>
            <Helmet>
                {/* Tags de título e descrição normais */}
                <title>{gtitle} - Centro Paula Souza | Fórum </title>
                <meta name="description" content={description} />

                {/* Tags de título e descrição do Twitter */}
                <meta property="twitter:creator" content={creator} />  
                <meta property="twitter:title" content={gtitle} />
                <meta property="twitter:description" content={description} />

                {/* Tags de título e descrição do Facebook */}
                <meta property="og:title" content={gtitle} />
                <meta property="og:description" content={description} />
            </Helmet>
            <TopicView description={description} gtitle={gtitle} creator={creator} topiccod={topiccod} />
        </>

    )
}

export default TopicPage
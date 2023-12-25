import React from 'react'
import PageView from '../components/topicView.js'
import { useParams } from 'react-router-dom'
import { topicInfo } from '../components/topicInfoSon'
import { Helmet } from 'react-helmet-async';

function TopicPage() {
    const { topiccod } = useParams();
    const title = `${topicInfo[topiccod - 1].title} - Centro Paula Souza | Fórum`
    const description = topicInfo[topiccod - 1].body.substring(0, 160) + '...'
    const creator = topicInfo[topiccod - 1].author
    return (
        <>
            <Helmet>
                {/* Tags de título e descrição normais */}
                <title>{title}</title>
                <meta name="description" content={description} />

                {/* Tags de título e descrição do Twitter */}
                <meta property="twitter:creator" content={creator} />  
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />

                {/* Tags de título e descrição do Facebook */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Helmet>
            <PageView topiccod={topiccod} />
        </>

    )
}

export default TopicPage
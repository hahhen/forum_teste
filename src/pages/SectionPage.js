import React from 'react'
import Feed from '../components/feed';
import { useParams } from 'react-router-dom';
import { section } from '../components/topicInfoSon';
import { Helmet } from 'react-helmet-async';

function SectionPage() {    
    const { slug } = useParams();
    const index = section.findIndex(section => section.slug === slug)
    const section9 = section[index].sectioncod
    const title = `${section[index].sectionname} - Centro Paula Souza | Fórum`
    console.log(section9)
    return (
        <>
        <Helmet>
                {/* Tags de título e descrição normais */}
                <title>{title}</title>

                {/* Tags de título e descrição do Twitter */}
                <meta property="twitter:title" content={title} />

                {/* Tags de título e descrição OpenGraph (Facebook, LinkedIn, etc) */}
                <meta property="og:title" content={title} />
            </Helmet>
        <Feed section1={section9} s={true} />
        </>
    )
}

export default SectionPage
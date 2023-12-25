import React from 'react'
import Feed from '../components/feed';
import Section from '../components/sectionshomedropdown';
import { Helmet } from 'react-helmet-async';

function Home() {
    return (
        <>
            <Helmet>
                {/* Tags de título e descrição normais */}
                <title>Centro Paula Souza | Fórum</title>
                <meta name="description" content="Conecte-se com estudantes e professores, compartilhe conhecimento, tire dúvidas e participe de discussões sobre educação, tecnologia e inovação." />
            </Helmet>
            <Feed section1={1} />
            <Section />
        </>
    )
}

export default Home
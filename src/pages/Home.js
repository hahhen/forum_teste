import React, {useState} from 'react'
import Feed from '../components/feed';
import Section from '../components/sectionshomedropdown';
import { Helmet } from 'react-helmet-async';
import './home.css'
import MediaQuery from 'react-responsive';
import HomeRecentFeed from '../components/homerecentfeed';

function Home() {
    const [tab, setTab] = useState(1);
    function changeTab(tabvalue) {
        setTab(tabvalue);     
    }
    return (
        <>
            <Helmet>
                {/* Tags de título e descrição normais */}
                <title>Centro Paula Souza | Fórum</title>
                <meta name="description" content="Conecte-se com estudantes e professores, compartilhe conhecimento, tire dúvidas e participe de discussões sobre educação, tecnologia e inovação." />
            </Helmet>
            <Feed section1={1} />
            <nav>
                <div class="mb-3 ms-0 me-0 nav d-flex justify-content-between" id="nav-tab" role="tablist">
                    <button onClick={() => changeTab(1)} class="p-0 mt-0 nav-link active" id="nav-sections-tab" data-bs-toggle="tab" role="tab" aria-controls="nav-home" aria-selected="true">
                        <h4 className='tab-title'>
                            Seções
                        </h4>
                    </button>
                    <button onClick={() => changeTab(2)} class="p-0 mt-0 nav-link" id="nav-relevant-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">
                        <h4 className='tab-title'>
                            Relevantes
                        </h4>
                    </button>
                    <MediaQuery maxWidth={1000}>
                        <button onClick={() => changeTab(3)} class="p-0 mt-0 nav-link" id="nav-recent-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">
                            <h4 className='tab-title'>
                                Recentes
                            </h4>
                        </button>
                    </MediaQuery>
                </div>
            </nav>
            {tab === 1 ? <Section /> : tab === 2 ? '' : <HomeRecentFeed />}
        </>
    )
}

export default Home
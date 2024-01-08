import React from 'react'
import { section, supersection } from './topicInfoSon'
import { Link } from 'react-router-dom'
import './sectionshomedropdown.css'
import RecentFeed from './recentfeed'

function Section() {
    return (
        <>
            <div className={`section-wrapper mb-5`}>
                <h4 className={`section-top-title`}>
                    Matérias
                </h4>
                <details className={`pb-1 section`}>
                    <summary className={`section-title mb-3`}>Matemática e Ciências da Natureza</summary>
                    <ul className='m-0 section-list'>
                        {section.map((info) =>
                            info.ssection === 2 ?
                                <li>
                                    <div className={`mb-3 section-1`}>
                                        <Link to={`/secao/${info.slug}`} className={`subsection-title`} >{info.sectionname}</Link>
                                        <RecentFeed section={info.sectioncod} />
                                    </div>
                                </li>
                                : null
                        )}
                    </ul>
                </details>
                <details className={`pb-1 section `}>
                    <summary className={`section-title mb-3`}>Linguagens e Ciências Sociais</summary>

                    <ul className='m-0 section-list'>
                        {section.map((info) =>
                            info.ssection === 3 ?
                                <li>
                                    <div className={`mb-2 section-1`}>
                                        <Link to={`/secao/${info.slug}`} className={`subsection-title `}>{info.sectionname}</Link>
                                        <RecentFeed section={info.sectioncod} />
                                    </div>
                                </li>
                                : null
                        )}

                    </ul>
                </details>
            </div>
            <div className={`section-wrapper mb-5 `}>
                <h4 className={`section-top-title`}>
                    Cursos
                </h4>
                <details className={`pb-1 section `}>
                    <summary className={`section-title mb-3`}>Etec</summary>
                    <ul className='m-0 section-list'>
                        {section.map((info) =>
                            info.ssection === 4 ?
                                <li>
                                    <div className={`mb-2 section-1`}>
                                        <Link to={`/secao/${info.slug}`} className={`subsection-title `}>{info.sectionname}</Link>
                                        <RecentFeed section={info.sectioncod} />
                                    </div>
                                </li>
                                : ''
                        )}
                    </ul>
                </details>
                <details className={`pb-1 section `}>
                    <summary className={`section-title mb-3`}>Fatec</summary>
                    <ul className='m-0 section-list'>
                        {section.map((info) =>
                            info.ssection === 5 ?
                                <li>
                                    <div className={`mb-2 section-1`}>
                                        <Link to={`/secao/${info.slug}`} className={`subsection-title `}>{info.sectionname}</Link>
                                        <RecentFeed section={info.sectioncod} />
                                    </div>
                                </li>
                                : null
                        )}

                    </ul>
                </details>
            </div>
            <div className={`section-wrapper mb-5 `}>
            <h4 className={`section-top-title`}>
                Diversos
            </h4>
            {supersection.slice(5, supersection.length).map((sinfo) =>
                <details className={`pb-1 section `}>
                    <summary className={`section-title mb-3`}>{sinfo.ssectionname}</summary>
                    <ul className='m-0 section-list'>
                        {section.map((info) =>
                            info.ssection === sinfo.ssectioncod ?
                                <li>
                                    <div className={`mb-2 section-1`}>
                                        <Link to={`/secao/${info.slug}`} className={`subsection-title `}>{info.sectionname}</Link>
                                        <RecentFeed section={info.sectioncod} />
                                    </div>
                                </li>
                            : null
                        )}
                    </ul>
                </details>
            )}
        </div>

        </>
    )
}

export default Section
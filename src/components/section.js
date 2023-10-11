import React from 'react'
import { section, supersection } from './topicInfoSon'
import { isLight } from '../App'
import { Link } from 'react-router-dom'
import './section.css'

function Section() {
    return (
        <>
            <div className='section-wrapper mb-5'>
                <h4 className={`section-top-title ${isLight ? '' : 'dark'}`}>
                    Matérias
                </h4>
                <details className={`pb-1 section ${isLight ? "" : "dark"}`}>
                    <summary className={`section-title mb-3 ${isLight ? '' : 'dark'}`}>Ciências Exatas</summary>
                    <ul className='m-0 section-list'>
                        {section.map((info) =>
                            info.ssection === 2 ?
                                <li>
                                    <div className={`mb-2 section-1 ${isLight ? "" : "dark"}`}>
                                        <Link to={`/${info.sectionname}`} className={`subsection-title ${isLight ? "" : "dark"}`}>{info.sectionname}</Link>
                                    </div>
                                </li>
                                : null
                        )}
                    </ul>
                </details>
                <details className={`pb-1 section ${isLight ? "" : "dark"}`}>
                    <summary className={`section-title mb-3 ${isLight ? '' : 'dark'}`}>Ciências Humanas e Biológicas</summary>
                    <ul className='m-0 section-list'>
                        {section.map((info) =>
                            info.ssection === 3 ?
                                <li>
                                    <div className={`mb-2 section-1 ${isLight ? "" : "dark"}`}>
                                        <Link to={`/${info.sectionname}`} className={`subsection-title ${isLight ? "" : "dark"}`}>{info.sectionname}</Link>
                                    </div>
                                </li>
                                : null
                        )}

                    </ul>
                </details>
            </div>
            <div className='section-wrapper mb-5'>
                <h4 className={`section-top-title ${isLight ? '' : 'dark'}`}>
                    Cursos
                </h4>
                <details className={`pb-1 section ${isLight ? "" : "dark"}`}>
                    <summary className={`section-title mb-3 ${isLight ? '' : 'dark'}`}>Etec</summary>
                    <ul className='pt-2 m-0 section-list'>
                        {section.map((info) =>
                            info.ssection === 4 ?
                                <li>
                                    <div className={`mb-2 section-1 ${isLight ? "" : "dark"}`}>
                                        <Link to={`/${info.sectionname}`} className={`subsection-title ${isLight ? "" : "dark"}`}>{info.sectionname}</Link>
                                    </div>
                                </li>
                                : null
                        )}
                    </ul>
                </details>
                <details className={`pb-1 section ${isLight ? "" : "dark"}`}>
                    <summary className={`section-title mb-3 ${isLight ? '' : 'dark'}`}>Fatec</summary>
                    <ul className='pt-2 m-0 section-list'>
                        {section.map((info) =>
                            info.ssection === 5 ?
                                <li>
                                    <div className={`mb-2 section-1 ${isLight ? "" : "dark"}`}>
                                        <Link to={`/${info.sectionname}`} className={`subsection-title ${isLight ? "" : "dark"}`}>{info.sectionname}</Link>
                                    </div>
                                </li>
                                : null
                        )}

                    </ul>
                </details>
            </div>
            <div className='section-wrapper mb-5'>
                <h4 className={`section-top-title ${isLight ? '' : 'dark'}`}>
                    Diversos
                </h4>
                {supersection.slice(5, supersection.length).map((sinfo) =>
                    <details className={`pb-1 section ${isLight ? "" : "dark"}`}>
                        <summary className={`section-title mb-3 ${isLight ? '' : 'dark'}`}>{sinfo.ssectionname}</summary>
                        <ul className='pt-2 m-0 section-list'>
                            {section.map((info) =>
                                info.ssection === sinfo.ssectioncod ?
                                    <li>
                                        <div className={`mb-2 section-1 ${isLight ? "" : "dark"}`}>
                                            <Link to={`/${info.sectionname}`} className={`subsection-title ${isLight ? "" : "dark"}`}>{info.sectionname}</Link>
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
import React from 'react'
import { section, supersection} from './topicInfoSon'
import { isLight } from '../App'
import { Link } from 'react-router-dom'
import './section.css'

function Section() {
    
    const getModeClass = (lightClass, darkClass) => (isLight ? lightClass : darkClass);

    return (
        <>
            <div className={`section-wrapper mb-5 ${getModeClass('', 'dark')}`}>
                <h4 className={`section-top-title`}>
                    Matérias
                </h4>
                <details className={`pb-1 section ${getModeClass('', 'dark')}`}>
                    <summary className={`section-title mb-3`}>Ciências Exatas</summary>
                    <ul className='m-0 section-list'>
                        {section.map((info) =>
                            info.ssection === 2 ?
                                <li>
                                    <div className={`mb-2 section-1`}>
                                        <Link to={`/${info.sectionname}`} className={`subsection-title ${getModeClass('', 'dark')}`}>{info.sectionname}</Link>
                                    </div>
                                </li>
                                : null
                        )}
                    </ul>
                </details>
                <details className={`pb-1 section ${getModeClass('', 'dark')}`}>
                    <summary className={`section-title mb-3`}>Ciências Humanas</summary>
                    <ul className='m-0 section-list'>
                        {section.map((info) =>
                            info.ssection === 3 ?
                                <li>
                                    <div className={`mb-2 section-1`}>
                                    <Link to={`/${info.sectionname}`} className={`subsection-title ${getModeClass('', 'dark')}`}>{info.sectionname}</Link>
                                    </div>
                                </li>
                                : null
                        )}

                    </ul>
                </details>
            </div>
            <div className={`section-wrapper mb-5 ${getModeClass('', 'dark')}`}>
                <h4 className={`section-top-title`}>
                    Cursos
                </h4>
                <details className={`pb-1 section ${getModeClass('', 'dark')}`}>
                    <summary className={`section-title mb-3`}>Etec</summary>
                    <ul className='pt-2 m-0 section-list'>
                        {section.map((info) =>
                            info.ssection === 4 ?
                                <li>
                                    <div className={`mb-2 section-1`}>
                                        <Link to={`/${info.sectionname}`} className={`subsection-title ${getModeClass('', 'dark')}`}>{info.sectionname}</Link>
                                    </div>
                                </li>
                                : null
                        )}
                    </ul>
                </details>
                <details className={`pb-1 section ${getModeClass('', 'dark')}`}>
                    <summary className={`section-title mb-3`}>Fatec</summary>
                    <ul className='pt-2 m-0 section-list'>
                        {section.map((info) =>
                            info.ssection === 5 ?
                                <li>
                                    <div className={`mb-2 section-1`}>
                                        <Link to={`/${info.sectionname}`} className={`subsection-title ${getModeClass('', 'dark')}`}>{info.sectionname}</Link>
                                    </div>
                                </li>
                                : null
                        )}

                    </ul>
                </details>
            </div>
            <div className={`section-wrapper mb-5 ${getModeClass('', 'dark')}`}>
            <h4 className={`section-top-title`}>
                Diversos
            </h4>
            {supersection.slice(5, supersection.length).map((sinfo) =>
                <details className={`pb-1 section ${getModeClass('', 'dark')}`}>
                    <summary className={`section-title mb-3`}>{sinfo.ssectionname}</summary>
                    <ul className='pt-2 m-0 section-list'>
                        {section.map((info) =>
                            info.ssection === sinfo.ssectioncod ?
                                <li>
                                    <div className={`mb-2 section-1`}>
                                        <Link to={`/${info.sectionname}`} className={`subsection-title ${getModeClass('', 'dark')}`}>{info.sectionname}</Link>
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
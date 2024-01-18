import React from 'react'
import './sectionsmap.css'
import { isRetract, retract } from '../App'
import { supersection } from './topicInfoSon'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader'


function Sections() {
    const [loading, setLoading] = useState(true);
    const [sections, setSections] = useState([]);
    useEffect(() => {
        async function getSections() {
            const req = await fetch(`https://neon-nodejs-example-hahhen.vercel.app/sections`);
            const res = await req.json();
            setSections(res);
            setLoading(false);
        }
        getSections()
    }, [])


    return (
        <div id="sections-col" className={`sections pt-3 ${isRetract ? 'sections-map-open col-3' : 'col-1'}`}>
            <div className="sections-map-header">
                {isRetract ? <h5 id="sections-tit" className="sections-title">Seções</h5> : null}
                <span id="retract-btn"
                    className="retract-btn"
                    onClick={() => retract(!isRetract)}>
                    <i className={`fa-solid ${isRetract ? 'fa-caret-left' : 'fa-caret-right'}`}>
                    </i>{isRetract ? ' Recolher' : ' Expandir'}
                </span>
            </div>
            {isRetract ?
                <>
                    {loading ?
                        <ContentLoader
                            speed={1}
                            width={340}
                            height={1000}
                            viewBox="0 0 340 1000"
                            backgroundColor="var(--secondary-bg)"
                            foregroundColor="var(--background)"
                        >
                            <rect x="4" y="21" rx="3" ry="3" width="138" height="15" />
                            <rect x="52" y="48" rx="3" ry="3" width="132" height="15" />
                            <rect x="87" y="75" rx="3" ry="3" width="113" height="15" />
                            <rect x="87" y="98" rx="3" ry="3" width="113" height="15" />
                            <rect x="52" y="125" rx="3" ry="3" width="132" height="15" />
                            <rect x="87" y="152" rx="3" ry="3" width="113" height="15" />
                            <rect x="87" y="175" rx="3" ry="3" width="113" height="15" />
                            <rect x="4" y="217" rx="3" ry="3" width="138" height="15" />
                            <rect x="52" y="244" rx="3" ry="3" width="132" height="15" />
                            <rect x="87" y="271" rx="3" ry="3" width="113" height="15" />
                            <rect x="87" y="294" rx="3" ry="3" width="113" height="15" />
                            <rect x="52" y="321" rx="3" ry="3" width="132" height="15" />
                            <rect x="87" y="348" rx="3" ry="3" width="113" height="15" />
                            <rect x="87" y="371" rx="3" ry="3" width="113" height="15" />
                            <rect x="4" y="413" rx="3" ry="3" width="138" height="15" />
                            <rect x="52" y="440" rx="3" ry="3" width="132" height="15" />
                            <rect x="87" y="467" rx="3" ry="3" width="113" height="15" />
                            <rect x="87" y="490" rx="3" ry="3" width="113" height="15" />
                            <rect x="52" y="517" rx="3" ry="3" width="132" height="15" />
                            <rect x="87" y="544" rx="3" ry="3" width="113" height="15" />
                            <rect x="87" y="567" rx="3" ry="3" width="113" height="15" />
                        </ContentLoader>
                        :
                        <ul id="sections-map" className={isRetract ? 'sections-map sections-map-open' : 'sections-map sections-map-close'}>
                            <li className="section-sub-title">
                                Matérias
                                <ul>
                                    <li className="section-sub-sub-title">
                                        Matemática e Ciências da Natureza
                                        <ul>
                                            {sections.map((info) =>
                                                info.ssection === 2 ?
                                                    <li className="section-item">
                                                        <Link to={`/secao/${info.slug}`} className='section-item'>{info.sectionname}</Link>
                                                    </li>
                                                    : null
                                            )}

                                        </ul>
                                    </li>
                                    <li className="section-sub-sub-title">
                                        Linguagens e Ciências Sociais
                                        <ul>
                                            {sections.map((info) =>
                                                info.ssection === 3 ?
                                                    <li className="section-item">
                                                        <Link to={`/secao/${info.slug}`} className='section-item'>{info.sectionname}</Link>
                                                    </li>
                                                    : null
                                            )}
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="section-sub-title">
                                Cursos
                                <ul>
                                    <li className="section-sub-sub-title">
                                        Etec
                                        <ul>
                                            {sections.map((info) =>
                                                info.ssection === 4 ?
                                                    <li className="section-item">
                                                        <Link to={`/secao/${info.slug}`} className='section-item'>{info.sectionname}</Link>
                                                    </li>
                                                    : null
                                            )}
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="section-sub-sub-title">
                                        Fatec
                                        <ul>
                                            {sections.map((info) =>
                                                info.ssection === 5 ?
                                                    <li className="section-item">
                                                        <Link to={`/secao/${info.slug}`} className='section-item'>{info.sectionname}</Link>
                                                    </li>
                                                    : null
                                            )}
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="section-sub-title">
                                Diversos
                                {supersection.slice(5, supersection.length).map((sinfo) =>
                                    <ul>
                                        <li className="section-sub-sub-title">
                                            {sinfo.ssectionname}
                                            <ul>
                                                {sections.map((info) =>
                                                    info.ssection === sinfo.ssectioncod ?
                                                        <li className="section-item">
                                                            <Link to={`/secao/${info.slug}`} className='section-item'>{info.sectionname}</Link>
                                                        </li>
                                                        : null
                                                )}
                                            </ul>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    }
                </>
                : null}
        </div>

    )
}

export default Sections
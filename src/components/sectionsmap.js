import React from 'react'
import './sectionsmap.css'
import { isRetract, retract } from '../App'
import { section, supersection } from './topicInfoSon'
import { Link } from 'react-router-dom'

function Sections() {
    return (
        <div id="sections-col" className={`sections ${isRetract ? 'sections-map-open col-3' : 'col-1'}`}>
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
                <ul id="sections-map" className={isRetract ? 'sections-map sections-map-open' : 'sections-map sections-map-close'}>
                    <li className="section-sub-title">
                        Matérias
                        <ul>
                            <li className="section-sub-sub-title">
                                Exatas
                                <ul>
                                    {section.map((info) =>
                                        info.ssection === 2 ?
                                            <li className="section-item">
                                                <Link to={`/secao/${info.slug}`} className='section-item'>{info.sectionname}</Link>
                                            </li>
                                            : null
                                    )}

                                </ul>
                            </li>
                            <li className="section-sub-sub-title">
                                Humanas e Biológicas
                                <ul>
                                    {section.map((info) =>
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
                                    {section.map((info) =>
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
                                    {section.map((info) =>
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
                                        {section.map((info) =>
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
                : null}
        </div>

    )
}

export default Sections
import React from 'react'
import './sections.css'
import {isRetract, retract} from '../App'

function Sections() {
    return (
        <div id="sections-col" className={`sections ${isRetract? 'sections-map-open col-3': 'col-1'}`}>
            <div className="sections-map-header">
                {isRetract?<h5 id="sections-tit" className="sections-title">Seções</h5>:null}
                <span id="retract-btn" 
                className="retract-btn" 
                onClick={() => retract(!isRetract)}>
                    <i className={`fa-solid ${isRetract?'fa-caret-left':'fa-caret-right'}`}>
                    </i>{isRetract?' Recolher':' Expandir'}</span>
            </div>
            {isRetract?
                <ul id="sections-map" className={isRetract?'sections-map-open':'sections-map sections-map-close'}>
                    <li className="section-sub-title">
                        Matérias
                        <ul>
                            <li className="section-sub-sub-title">
                                Exatas
                                <ul>
                                    <li className="section-item">Matemática</li>
                                    <li className="section-item">Física</li>
                                    <li className="section-item">Química</li>
                                    <li className="section-item">Outros</li>
                                </ul>
                            </li>
                            <li className="section-sub-sub-title">
                                Humanas
                                <ul>
                                    <li className="section-item">Português e Literatura</li>
                                    <li className="section-item">Geografia</li>
                                    <li className="section-item">História</li>
                                    <li className="section-item">Artes</li>
                                    <li className="section-item">Outros</li>
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
                                    <li className="section-item">Desenvolvimento de Sistemas</li>
                                    <li className="section-item">Contabilidade</li>
                                    <li className="section-item">Química</li>
                                    <li className="section-item">Administração</li>
                                    <li className="section-item">Logística</li>
                                    <li className="section-item">Marketing</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            :null}
        </div>

    )
}

export default Sections
export {isRetract, retract}
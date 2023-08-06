import React from 'react'
import './sections.css'

function sections() {
  return (
        <div id="sections-col" className="col-3 sections">
                <div className="sections-map-header">
                    <h5 id="sections-tit" className="sections-title">Seções</h5>
                    <span id="retract-btn" className="retract-btn"><i className="fa-solid fa-caret-left"></i> Recolher</span>
                </div>
                <ul id="sections-map" className="sections-map">
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
            </div>
  )
}

export default sections
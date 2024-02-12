import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import { isLight, setLight } from '../App'
import AccountArea from './accountarea/accountarea';
import Sections from './sectionsmap';
import {HamburgerMenuIcon} from '@radix-ui/react-icons'

function Header() {
    return (
        <header>
            <nav id="navbar-top" className={`navbar navbar-expand-lg pt-3 pb-3 `}>
                <div className='container justify-content-between'>
                    <button class="navbar-dark p-0 shadow-none navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <HamburgerMenuIcon width={20} height={20} className='navbar-toggle-icon' />
                    </button>
                    <Link to={'/'} id='logo-area' className="navbar-brand d-flex align-items-center me-0">
                        <img id='logo-img' src='/logo-cps.png' alt="CPS" width="80" className="me-4 d-inline-block align-text-top" />
                        <span id="header-title" className="mt-1 text-white">Fórum</span>
                    </Link>
                    <div id='account-area' className='account-area d-flex align-items-center'>
                        <AccountArea />
                    </div>
                </div>
            </nav>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <div className='pt-3 d-flex flex-column align-items-center'>
                    <div id='sidebar-top' className='mt-5 pt-2 d-flex justify-content-between' style={{width: '90%'}}>
                        <div className="navbar-section-item d-flex">
                            <div className="input-group">
                                <input size={100} type="text" className="searchbar form-control" placeholder="Pesquisar" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='navbar-section-item d-flex'>
                            <button className={`btn button`} onClick={() => setLight(!isLight)}>
                                <i className={isLight ? "fa-solid fa-moon light" : "fa-solid fa-sun dark"}></i>
                            </button>
                        </div>
                    </div>
                    <Sections />
                </div>
            </div>
            <nav id="navbar-bottom" className={`navbar pt-2 pb-2`}>
                <div className="container">
                    <ul className="container navbar-section m-0 d-flex align-items-center justify-content-between">
                        <li className={`navbar-section-item nav-link `}>
                            Matemática
                        </li>
                        <span className={`item-aparter `}></span>
                        <li className={`navbar-section-item nav-link `}>
                            Física
                        </li>
                        <span className={`item-aparter `}></span>
                        <li className={`navbar-section-item nav-link `}>
                            Química
                        </li>
                        <span className={`item-aparter `}></span>
                        <li className={`navbar-section-item nav-link `}>
                            Português e Literatura
                        </li>
                        <span className={`item-aparter `}></span>
                        <li className={`navbar-section-item nav-link `}>
                            Biologia
                        </li>
                        <span className={`item-aparter `}></span>
                        <li className={`navbar-section-item nav-link `}>
                            TCC
                        </li>
                        <span className={`item-aparter `}></span>
                        <li className={`navbar-section-item nav-link `}>
                            Cursos
                        </li>
                        <span className={`item-aparter `}></span>
                        <li className={`navbar-section-item nav-link `}>
                            Todas as Matérias
                        </li>
                        <span className={`item-aparter `}></span>
                        <li className="navbar-section-item d-flex justify-content-end">
                            <input id="searchbar" type="text" className="form-control searchbar" placeholder="Pesquisar" aria-label="Username" aria-describedby="basic-addon1" />
                        </li>
                        <li className='navbar-section-item d-flex'>
                            <button className={`btn button`} onClick={() => setLight(!isLight)}>
                                <i className={isLight ? "fa-solid fa-moon light" : "fa-solid fa-sun dark"}></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Header
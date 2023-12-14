import React from 'react';
import { useMsal } from "@azure/msal-react";
import './header.css';
import { Link } from 'react-router-dom';
import { isLight, setLight } from '../App';
import { loginRequest } from '../auth/authConfig';	


function Header() {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginPopup(loginRequest).catch(e => {
            console.log(e);
        });
    }

    return (
        <header>
            <nav id="navbar-top" className={`navbar pt-3 pb-3 `}>
                <div className='container justify-content-between'>

                    <Link to={'/'} className="navbar-brand d-flex align-items-center">
                        <img src='/logo-cps.png' alt="CPS" width="80" className="me-4 d-inline-block align-text-top" />
                        <span id="header-title" className="mt-1 text-white">Fórum</span>
                    </Link>

                    <div id='account-area' className='account-area d-flex align-items-center'>
                        <Link id="login-btn" className="login-btn d-flex align-items-center me-2" to={"/"}>
                            <button onClick={() => handleLogin()} type="button" className="btn btn-outline-light">Entre</button>
                        </Link>
                    </div>
                </div>
            </nav>
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
                        <li className="navbar-section-item d-flex">
                            <div className="input-group">
                                <input id="searchbar" type="text" className="form-control" placeholder="Pesquisar" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
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
import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div id='footer-cps' className='p-4'>
                <div className='row'>
                    <div className='col-sm-4 mt-4 mb-4 d-flex justify-content-center align-items-center'>
                        <div className="navbar-brand mb-3 d-flex align-items-center">
                            <img src='/logo-cps.png' alt="CPS" width="100" className="me-4 d-inline-block align-text-top" />
                            <span id="footer-title" className="mt-1 text-white">Fórum</span>
                        </div>
                    </div>
                    <div className='mt-4 mb-4 col-sm-2 site-map d-flex flex-column'>
                            <div className='d-flex flex-column'>
                                <h5>Links</h5>
                                <Link to='/'>Home</Link>
                                <Link to='/criar'>Crie um tópico</Link>
                                <Link to='https://www.cpsforum.com.br/topico/leia-atentamente-as-regras/1'>Regras</Link>
                                <Link to='/'>Sobre</Link>
                            </div>
                        </div>
                    <div className='mt-4 mb-4 col-sm-3'>
                        <div className='d-flex flex-column mb-3'>
                            <h5>Administração Central</h5>
                            <span>Rua dos Andradas, 140 - Santa Ifigênia</span>
                            <span>CEP 01208-000 – São Paulo – SP</span>
                        </div>
                        <div className='d-flex flex-column'>
                            <h5>Contato</h5>
                            <span>suporte@cpsforum.com.br</span>
                        </div>
                    </div>
                    <div className='col-sm-3 mt-4 mb-2'>
                        <div className='d-flex flex-column mb-3'>
                            <h5>Redes</h5>
                            <Link to='https://www.instagram.com/forumcps/' style={{ textDecoration: 'none' }}>
                                <div id='inst-icon' className='d-flex justify-content-center align-items-center rounded-circle' style={{ width: '40px', height: '40px', background: '#00c1cf' }}>
                                    <i className="fa-brands fa-xl fa-instagram"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id='bottom-footer' className='p-3 bottom-footer d-flex justify-content-center'>
                <span>Não associado ao Centro Paula Souza. Desenvolvido pelo grupo Fórum CPS. Todos os direitos reservados.</span>
            </div>
            <div id='footer-sp' className='p-4 d-flex justify-content-center' style={{ background: '#000' }}>
                <img src='/sp-logo.png' alt="SP" width="230" />
            </div>
        </footer>
    )
}

export default Footer
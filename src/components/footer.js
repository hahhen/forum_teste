import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div id='footer-cps'>
                <div className='d-flex flex-column'>
                    <div className='mb-3'>
                        <div className='d-flex flex-column mb-2'>
                            <h6 className='mb-0'>Administração Central</h6>
                            <span>Rua dos Andradas, 140 - Santa Ifigênia</span>
                            <span>CEP 01208-000 – São Paulo – SP</span>
                        </div>
                        <div className='d-flex flex-column mb-2'>
                            <h6 className='mb-0'>Contato</h6>
                            <span>suporte@cpsforum.com.br</span>
                        </div>
                        <div className='d-flex flex-column mb-3'>
                            <h6 className='mb-1'>Redes</h6>
                            <Link to='https://www.instagram.com/forumcps/' style={{ textDecoration: 'none' }}>
                                <div id='inst-icon'>
                                    <i className="fa-brands fa-xl fa-instagram"></i>
                                </div>
                            </Link>
                        </div>
                        <div id='bottom-footer' className='bottom-footer'>
                            <span>Não associado ao Centro Paula Souza. Desenvolvido pelo grupo Fórum CPS. Todos os direitos reservados.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import React from "react";
import { Link } from 'react-router-dom';
import './accountBtn.css';

function AccountBtn({ instance, picurl, graphData }) {
    const handleLogout = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri: "/",
            mainWindowRedirectUri: "/"
        });
    }
    return (
        <div className="accountbutton_wrapper">
            <div className="dropdown">
                <button data-bs-auto-close="outside" className="accountbutton pt-1 pb-1 border-0 rounded d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img alt="Foto de perfil" src={`${picurl}`} width={50} height={50} className="pfp me-2 rounded-circle"
                        style={{
                            backgroundSize: 'cover',
                        }}
                    />
                    <i id="p_dropdown" className="fa-solid fa-caret-down" style={{ color: '#fff' }} aria-hidden="true"></i>
                </button>
                <ul style={{whiteSpace: 'nowrap', backgroundColor: `var(--highlight-bg)`, color: `var(--font)` }} className="p-2 dropdown-menu dropdown-menu-end">
                    <div className='notificationbutton-dropdown-header d-flex flex-column pt-3 pe-3 ps-3'>
                        <h5 className="mb-1" style={{ fontWeight: 600 }}>{graphData.displayName}</h5>
                        <span style={{color: `var(--secondary-font)`}}><small>{graphData.mail}</small></span>
                    </div>
                    <hr />
                    <li><Link to={"/perfil"} className="rounded dropdown-item">Meu perfil</Link></li>
                    <li><Link to={"/configuracoes"} className="rounded dropdown-item" href="#">Configurações</Link></li>
                    <li><button className="rounded dropdown-item" onClick={handleLogout}>Sair</button></li>
                </ul>
            </div>
        </div>
    )
}

export default AccountBtn
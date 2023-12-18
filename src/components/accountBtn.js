import React, { useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from '../auth/authConfig';
import { Link } from 'react-router-dom';
import { useIsAuthenticated } from "@azure/msal-react";
import { callMsGraph, callMsGraphPhoto } from "../auth/graph";
import './accountBtn.css'

function AccountBtn() {

    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);
    const [picurl, setPicurl] = useState(null);

    function RequestProfileData() {
        // Silently acquires an access token which is then attached to a request for MS Graph data
        instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
        })
            .then((response) => {
                callMsGraph(response.accessToken).then(response => setGraphData(response));
                callMsGraphPhoto(response.accessToken).then(response => response.blob())
                    .then(blob => {
                        const url = URL.createObjectURL(blob);
                        setPicurl(url);
                    });
                console.log(graphData)
            });
    }
    const isAuthenticated = useIsAuthenticated()
    const handleLogin = () => {
        instance.loginRedirect(loginRequest).catch(e => {
            console.log(e);
        });
    }
    const handleLogout = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri: "/",
            mainWindowRedirectUri: "/"
        });
    }
    useEffect(() => {
        if (isAuthenticated) {
            RequestProfileData();
        }
    }, [isAuthenticated]);
    return (
        <>
            {
                isAuthenticated && graphData && picurl ?
                    <>
                        <div className="dropdown">
                            <button className="bg-transparent border-0 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img alt="Foto de perfil" src={`${picurl}`} width={50} height={50} className="pfp me-2 rounded-circle"
                                    style={{
                                        backgroundSize: 'cover',
                                    }}
                                />
                                <i id="p_dropdown" className="fa-solid fa-caret-down" style={{ color: '#fff' }} aria-hidden="true"></i>
                            </button>
                            <ul style={{ backgroundColor: `var(--highlight-bg)`, color: `var(--font)` }} className="dropdown-menu dropdown-menu-end">
                                <h5 style={{ fontWeight: 600 }} className="pt-1 ps-3 pe-3">{`Olá, ${graphData.givenName}!`}</h5>
                                <li><Link to={"/perfil"} className="dropdown-item">Meu perfil</Link></li>
                                <li><Link to={"/configuracoes"} className="dropdown-item" href="#">Configurações</Link></li>
                                <li><button className="dropdown-item" onClick={handleLogout}>Sair</button></li>
                            </ul>
                        </div>

                    </>
                    :
                    <Link id="login-btn" className="login-btn d-flex align-items-center me-2" to={"/"}>
                        <button onClick={() => handleLogin()} type="button" className="btn btn-outline-light">Entre</button>
                    </Link>
            }
        </>
    )
}

export default AccountBtn
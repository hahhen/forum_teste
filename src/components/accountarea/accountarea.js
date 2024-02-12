import React, { useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from '../../auth/authConfig';
import { useIsAuthenticated } from "@azure/msal-react";
import { callMsGraph, callMsGraphPhoto } from "../../auth/graph";
import AccountBtn from "./accountBtn";
import { Link } from 'react-router-dom';
import NotificationButton from "./notificationbutton";

function AccountArea() {
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

            });
    }

    const isAuthenticated = useIsAuthenticated()

    const handleLogin = () => {
        instance.loginRedirect(loginRequest)
    }

    useEffect(() => {
        if (isAuthenticated) {
            RequestProfileData();
        }
    }, [isAuthenticated]);
    return (
        <>
            {
                isAuthenticated ?
                    <>
                        <NotificationButton />
                        <AccountBtn instance={instance} graphData={graphData} picurl={picurl} />
                    </>
                    :
                    <Link id="login-btn" className="login-btn d-flex align-items-center" to={"/"}>
                        <button onClick={() => handleLogin()} type="button" className="btn btn-outline-light">Entre</button>
                    </Link>

            }
        </>
    )
}

export default AccountArea
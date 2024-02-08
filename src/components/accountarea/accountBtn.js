import React from "react";
import { Link } from 'react-router-dom';
import './accountBtn.css';
import * as Popover from '@radix-ui/react-popover';
import { PersonIcon, GearIcon, ExitIcon, Pencil2Icon } from '@radix-ui/react-icons';
import * as Separator from '@radix-ui/react-separator';
import ContentLoader from "react-content-loader"

function AccountBtn({ instance, picurl, graphData }) {
    const handleLogout = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri: "/",
            mainWindowRedirectUri: "/"
        });
    }
    return (
        <Popover.Root>
            <div className="accountpopoverwrapper">
                <Popover.Trigger asChild>
                    <button className="accountbutton pt-1 pb-1 border-0 rounded d-flex align-items-center">
                        {picurl ?
                            <img alt="Foto de perfil" src={`${picurl}`} width={50} height={50} className="pfp me-2 rounded-circle"
                                style={{
                                    backgroundSize: 'cover'
                                }}
                            /> :
                            <ContentLoader
                                speed={1}
                                width={50}
                                height={50}
                                viewBox="0 0 50 50"
                                backgroundColor="var(--secondary-bg)"
                                foregroundColor="var(--background)"
                                className="me-2"
                            >
                                <circle cx="25" cy="25" r="25" />
                            </ContentLoader>
                        }
                        <i id="p_dropdown" className="fa-solid fa-caret-down" style={{ color: '#fff' }} aria-hidden="true"></i>
                    </button>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content align="end" className="PopoverContent" sideOffset={5}>

                        {graphData ?
                            <div className='notificationbutton-dropdown-header d-flex flex-column'>
                                <h5 className="mb-1" style={{ fontWeight: 600, color: 'var(--font)' }}>{graphData.displayName}</h5>
                                <span style={{ color: `var(--secondary-font)` }}><small>{graphData.mail}</small></span>
                            </div>
                            :
                            <ContentLoader
                                speed={1}
                                width={222}
                                height={34}
                                viewBox="0 0 222 34"
                                backgroundColor="var(--background)"
                                foregroundColor="var(--secondary-bg)"
                            >
                                <rect x="0" y="0" rx="6" ry="6" width="222" height="17" />
                                <rect x="0" y="24" rx="6" ry="6" width="206" height="10" />
                            </ContentLoader>
                        }
                        <Separator.Root className="SeparatorRoot" style={{ margin: '15px 0' }} />
                        <Link to={"/criar"} className="mb-1 rounded d-flex align-items-center dropdown-item"><Pencil2Icon className="me-2" />Criar novo tópico</Link>
                        <Link to={"/perfil"} className="mb-1 rounded d-flex align-items-center dropdown-item"><PersonIcon className="me-2" />Meu perfil</Link>
                        <Link to={"/configuracoes"} className="mb-1 d-flex align-items-center rounded dropdown-item" href="#"><GearIcon className="me-2" />Configurações</Link>
                        <button className="d-flex align-items-center rounded dropdown-item" onClick={handleLogout}><ExitIcon className="me-2" />Sair</button>
                        <Popover.Arrow className="PopoverArrow" />
                    </Popover.Content>
                </Popover.Portal>
            </div>
        </Popover.Root >
    )
}

export default AccountBtn
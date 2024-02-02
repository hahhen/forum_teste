import React from 'react'
import './accountBtn.css';
import './notificationbutton.css';
import * as Popover from '@radix-ui/react-popover';
import * as Separator from '@radix-ui/react-separator';


function NotificationButton() {
    return (
        <Popover.Root>
            <div className="notificationbutton-wrapper">
                <Popover.Trigger asChild>
                    <button className='notifbutton p-0 border-0 rounded-circle'>
                        <i style={{ color: `#fff` }} className="fa-lg fa-regular fa-bell"></i>
                    </button>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content align='end' className="PopoverContent">
                        <div className="notifdropdown">
                            <div className='notificationbutton-dropdown-header d-flex flex-wrap justify-content-between'>
                                <h5 style={{ fontWeight: 600 }} className='me-5'>Notificações</h5>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked={true} />
                                    <label style={{ color: `var(--secondary-font)` }} className="form-check-label" htmlFor="flexSwitchCheckChecked"><small>Mostrar somente não lidas</small></label>
                                </div>
                            </div>
                            <Separator.Root className="SeparatorRoot" style={{ margin: '1rem 0' }} />
                            <div className='notifications-area d-flex flex-column align-items-center'>
                                <small style={{color: 'var(--secondary-font)'}}>Você não tem nenhuma notificação</small>
                            </div>
                        </div>
                        <Popover.Arrow className="PopoverArrow" />
                    </Popover.Content>
                </Popover.Portal>
            </div>
        </Popover.Root>
    )
}

export default NotificationButton
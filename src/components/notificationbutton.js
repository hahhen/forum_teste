import React from 'react'
import './notificationbutton.css'

function NotificationButton() {
    return (
        <div className="notificationbutton-wrapper">
            <div className="dropdown">
                <button className='notifbutton me-2 border-0 rounded-circle' type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                    <i style={{ color: `#fff` }} className="fa-lg fa-regular fa-bell"></i>
                </button>
                <ul style={{ whiteSpace: 'nowrap', backgroundColor: `var(--highlight-bg)`, color: `var(--font)`, marginTop: '11px' }} className="p-2 dropdown-menu dropdown-menu-end">
                    <div className='notificationbutton-dropdown-header d-flex pt-3 pe-3 ps-3'>
                        <h5 style={{ fontWeight: 600 }} className='me-5'>Notificações</h5>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked={true}/>
                            <label style={{color: `var(--secondary-font)`}} className="form-check-label" htmlFor="flexSwitchCheckChecked"><small>Mostrar somente não lidas</small></label>
                        </div>
                    </div>
                    <hr />
                </ul>
            </div>
        </div>
    )
}

export default NotificationButton
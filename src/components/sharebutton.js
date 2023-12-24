import React, { useRef, useEffect } from 'react'

function ShareButton(info) {
  const url = window.location.href
  function CopyToClipboard() {
    navigator.clipboard.writeText(url)
  }
  return (
    <>
      <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal" title='Compartilhar' className='interactionbutton bg-transparent border-0'>
        <i className="me-1 fa-regular fa-share-from-square fa-lg" style={{ color: `var(--font)` }}></i>
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Compartilhar</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column">
              <div className='upper pt-2 d-flex justify-content-evenly'>
                <button className='interactionbutton border-0 bg-transparent'>
                  <i className="fa-brands fa-facebook fa-2xl"></i>
                </button>
                <button className='interactionbutton border-0 bg-transparent'>
                  <i className="fa-brands fa-whatsapp fa-2xl"></i>
                </button>
                <button className='interactionbutton border-0 bg-transparent'>
                  <i className="fa-brands fa-x-twitter fa-2xl"></i>
                </button>
                <button className='interactionbutton border-0 bg-transparent'>
                  <i className="fa-brands fa-linkedin fa-2xl"></i>
                </button>
                <button className='interactionbutton border-0 bg-transparent'>
                  <i className="fa-solid fa-envelope fa-2xl"></i>
                </button>
              </div>
              <div className='lower pt-4 ps-3 pe-3'>
                <div className="input-group mb-3">
                  <div className='form-control' aria-describedby="addon">{url}</div>
                  <button className="input-group-text btn btn-secondary" id="addon" onClick={() => CopyToClipboard()}>
                    <i className="fa-solid fa-link fa-lg" style={{ color: "#fff" }}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShareButton
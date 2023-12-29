import React from 'react'
import './sharebutton.css'

function ShareButton({ description, gtitle, creator}) {
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
                <a href={`https://www.facebook.com/sharer.php?u=${url}`} className='interactionbutton border-0 bg-transparent'>
                  <i className="fa-brands fa-facebook fa-2xl"></i>
                </a>
                <a href={`https://api.whatsapp.com/send?text=${gtitle} por ${creator} - Centro Paula Souza | Fórum%20${url}`} className='interactionbutton border-0 bg-transparent'>
                  <i className="fa-brands fa-whatsapp fa-2xl"></i>
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${url}&text=${gtitle} por ${creator} - Centro Paula Souza - Fórum`} className='interactionbutton border-0 bg-transparent'>
                  <i className="fa-brands fa-x-twitter fa-2xl"></i>
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} className='interactionbutton border-0 bg-transparent'>
                  <i className="fa-brands fa-linkedin fa-2xl"></i>
                </a>
                <a href={`mailto:?subject=${gtitle}&body=${description}\nLeia mais em: ${url}`} className='interactionbutton border-0 bg-transparent'>
                  <i className="fa-solid fa-envelope fa-2xl"></i>
                </a>
              </div>
              <div className='lower pt-4 ps-3 pe-3'>
                <div className="input-group mb-3">
                  <div className='form-control' aria-describedby="addon">{url}</div>
                  <button className="input-group-text btn btn-secondary" id="addon" onClick={() => CopyToClipboard()}>
                    <i className="fa-solid fa-clone fa-lg" style={{ color: "#fff" }}></i>
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
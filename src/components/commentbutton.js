import React from 'react'

function CommentButton({ info }) {
    return (
        <button title='Comentar' className='interactionbutton d-flex align-items-center bg-transparent border-0'>
            <i className="me-1 fa-regular fa-comment fa-lg" style={{ color: `var(--font)` }}></i>
            <span  style={{fontSize: '14px', color: `var(--font)`}}>{info.comentarios}</span>
        </button>
    )
}

export default CommentButton
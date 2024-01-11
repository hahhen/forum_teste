import React, { useState, useEffect } from 'react'

function LikeButton({info}) {
  const [like, setLike] = useState(false)
  const [beat, setBeat] = useState(false);

  //Animação de batida que dura 1 segundo
  useEffect(() => {
    if (like) {
      setBeat(true);
      const timer = setTimeout(() => {
        setBeat(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [like]);

  return (
    <button title='Curtir' className={`me-5 d-flex align-items-center bg-transparent border-0 ${like? '':'interactionbutton'}`} onClick={() => setLike(!like)}>
      {like ? <i className={`me-1 fa-solid fa-heart fa-lg ${beat ? 'fa-beat' : ''}`} style={{color: `#ff2e2e`}}></i> : <i className="me-1 fa-regular fa-heart fa-lg" style={{color: `var(--font)`}}></i>}
      <span style={{fontSize: '14px', color: `var(--font)`}}>{like? info.likes+1:info.likes}</span>
    </button>

  )
}

export default LikeButton
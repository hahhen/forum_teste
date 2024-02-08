import React from 'react'
import './sharebutton.css'
import { ClipboardCopyIcon, Cross2Icon } from '@radix-ui/react-icons'
import * as Dialog from '@radix-ui/react-dialog';
import * as Popover from '@radix-ui/react-popover';
import * as Separator from '@radix-ui/react-separator';

function ShareButton({ description, gtitle, creator }) {
  const url = window.location.href
  function CopyToClipboard() {
    navigator.clipboard.writeText(url)
  }
  return (
    <>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type='button' title='Compartilhar' className='interactionbutton bg-transparent border-0'>
            <i className="me-1 fa-regular fa-share-from-square fa-lg" style={{ color: `var(--font)` }}></i>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='DialogOverlay' />
          <Dialog.Content className="DialogContent" sideOffset={5}>
            <Dialog.Title className="DialogTitle">Compartilhar</Dialog.Title>
            <Separator.Root className="SeparatorRoot" style={{ margin: '1rem 0' }} />

            <div className='upper pt-2 d-flex justify-content-evenly'>
              <a href={`https://www.facebook.com/sharer.php?u=${url}`} className='interactionbutton border-0 bg-transparent'>
                <i className="fa-brands fa-facebook fa-2xl"></i>
              </a>
              <a href={`https://api.whatsapp.com/send?text=${gtitle} - por ${creator} - Centro Paula Souza | Fórum%20${url}`} className='interactionbutton border-0 bg-transparent'>
                <i className="fa-brands fa-whatsapp fa-2xl"></i>
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${url}&text=${gtitle} - por ${creator} - Centro Paula Souza - Fórum`} className='interactionbutton border-0 bg-transparent'>
                <i className="fa-brands fa-x-twitter fa-2xl"></i>
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} className='interactionbutton border-0 bg-transparent'>
                <i className="fa-brands fa-linkedin fa-2xl"></i>
              </a>
              <a href={`mailto:?subject=${gtitle}&body=${description}\nLeia mais em: ${url}`} className='interactionbutton border-0 bg-transparent'>
                <i className="fa-solid fa-envelope fa-2xl"></i>
              </a>
            </div>
            <div className='lower pt-4 '>
              <div className="input-group mb-3">
                <div className='form-control' style={{background: 'var(--background)'}} aria-describedby="addon">
                  <span style={{ wordWrap: 'break-word', color: 'var(--font)'}}>
                    {url}
                  </span>
                </div>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <button className="input-group-text btn interactionbutton" id="addon" style={{ background: 'var(--secondary-bg)' }} onClick={() => CopyToClipboard()}>
                      <ClipboardCopyIcon color='var(--font)' width={20} height={20} />
                    </button>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content side='top' className="TooltipContent" sideOffset={5}>
                      Copiado para a área de transferência
                      <Popover.Arrow className="TooltipArrow" />
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </div>
            </div>
            <Dialog.Close className='DialogClose' asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default ShareButton
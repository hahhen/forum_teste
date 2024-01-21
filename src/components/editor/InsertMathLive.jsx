import React, { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './InsertMathLive.css'
import 'mathlive';
import 'mathlive/fonts.css';
import { ref } from './editor';
import { renderMathInElement } from 'mathlive';

function insertLatex() {
    ref.current?.focus();
    // O editor não permite espaço/quebra de linha no começo do texto, então é necessário inserir um caractere invisível
    ref.current?.insertMarkdown(`‎ 
    
    $$
    ` + document.getElementById('mfdialog').getValue() + ` 
    $$

    ‎`);
    renderMathInElement('editor')
    
}

const InsertMathLive = () => (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button title='Inserir fórmula' type="button" class="_toolbarButton_11eqz_218" data-toolbar-item="true" tabindex="0" data-orientation="horizontal" data-radix-collection-item="">
                <svg width="20" height="20" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M295.648 32h267.304v64.029H336.208L229.677 480h-45.936L75.842 288.114H0v-64.028h119.236l74.377 143.664L295.648 32Zm88.841 201.49c12.216-12.506 9.296-9.716 22.039-22.76l62.599 64.078 62.599-64.078 22.137 22.66L576 256.05l-62.599 64.079L576 384.207l-22.137 22.66-22.137 22.66-62.599-64.078-62.599 64.078-22.137-22.66-22.137-22.66 62.599-64.078-62.501-63.979c7.59-7.97 9.822-10.255 22.039-22.76l.098.1Z" fill='var(--baseText)' />
                </svg>
            </button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent" onPointerDownOutside={(e) => e.preventDefault()}>
                <Dialog.Title className="DialogTitle">Inserir fórmula</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                    Utilize o teclado virtual, insira LaTeX ou digite a fórmula no campo abaixo.
                </Dialog.Description>
                <math-field id="mfdialog" value="x=y">
                </math-field>
                <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                    <Dialog.Close className='DialogClose' asChild>
                        <button className="Button blue" onClick={() => insertLatex()}>Inserir</button>
                    </Dialog.Close>
                </div>
                <Dialog.Close className='DialogClose' asChild>
                    <button className="IconButton" aria-label="Close">
                        <Cross2Icon />
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
)


export default InsertMathLive
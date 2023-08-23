import React from 'react'
import Header from '../components/header';
import './criar.css'
import { isLight } from '../App';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'

function Criar() {
    return (
        <>
            <Header />
            <main className='container pt-5'>
                <h1 className='create-header mb-3'>Criar tópico</h1>
                <div className='options-wrapper mb-4'>
                    <div className='wrapper-select mb-2'>
                        <label htmlFor='section-select'>Seção: </label>
                        <select id='section-select' className='section-select form-select ps-1'>
                            <option>Matemática</option>
                            <option>Português</option>
                            <option>Desenvolvimento de Sistemas</option>
                        </select>
                    </div>
                    <div className='wrapper-select mb-2'>
                        <label htmlFor='privacy-select'>Privacidade: </label>
                        <select defaultValue={'publ'} id='privacy-select' className='section-select form-select ps-1'>
                            <option value={'priv'}>Privado</option>
                            <option value={'mi'}>Minha instituição</option>
                            <option value={'publ'}>Público</option>
                        </select>
                    </div>
                </div>
                <div className='title-wrapper mb-4'>
                    <label htmlFor='inTopicTitle' className='mb-2'>Título <small>(obrigatório)</small></label>
                    <input type='text' className='topic-title-input' name='inTopicTitle' id='inTopicTitle' />
                </div>
                <label htmlFor='ckeditor' className='mb-2'>Corpo:</label>
                <CKEditor id={'ckeditor'}
                    editor={Editor}
                    data={"<p>Escreva aqui seu tópico!</p"}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                />
                <button id='post-button' className='mt-4 mb-5 post-button m-0 btn btn-primary'>Criar tópico</button>
            </main>
        </>
    )
}

export default Criar
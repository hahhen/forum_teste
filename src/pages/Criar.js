import React from 'react'
import Header from '../components/header';
import './criar.css'
import { isLight } from '../App';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function Criar() {
    return (
        <>
            <Header />
            <main className='container p-5'>
                <h1 className='create-header'>Criar tópico</h1>
                <div className='options-wrapper'>
                    <div className='wrapper-select'>
                        <span>Seção: </span>
                        <select className='section-select form-select ps-1'>
                            <option>Matemática</option>
                            <option>Português</option>
                            <option>Desenvolvimento de Sistemas</option>
                        </select>
                    </div>
                    <div className='wrapper-select'>
                        <span>Privacidade: </span>
                        <select className='section-select form-select ps-1'>
                            <option>Privado</option>
                            <option>Minha instituição</option>
                            <option selected>Público</option>
                        </select>
                    </div>
                    <div className=''>
                        <button className='post-button m-0 btn btn-primary'>Criar tópico</button>
                    </div>
                </div>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Escreva aqui seu tópico!</p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </main>
        </>
    )
}

export default Criar
import React, { useRef } from 'react'
import Header from '../components/header';
import './criar.css'
import { isLight } from '../App';
import { Editor } from '@tinymce/tinymce-react';
import { section } from '../components/topicInfoSon';

function Criar() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
        console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            <Header />
            <main className='container pt-5'>
                <h1 className='create-header mb-3'>Criar tópico</h1>
                <div className='options-wrapper mb-4'>
                    <div className='wrapper-select mb-2'>
                        <label htmlFor='section-select'>Seção: </label>
                        <select id='section-select' className='section-select form-select ps-1'>
                            {section.slice(1).map((info)=>
                            <option>{info.sectionname}</option>
                            )}
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
                {
                    <Editor
                        apiKey='fj80sqetd8mxsjp2pseqiuomat4y6sp4yaq3f5jscu6bkss0'
                        onInit={(evt, editor) => editorRef.current = editor}
                        init={{
                        placeholder: 'Escreva aqui seu tópico!',
                        height: 500,
                        branding: false,
                        mobile: {
                            menubar: true
                          },
                        language: 'pt_BR',
                        menubar: true,
                        autosave_restore_when_empty: true,
                        autosave_interval: '5s',
                        plugins: [
                            'advlist', 'autosave', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount', 'codesample'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | fullscreen | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                }
                <button id='post-button' className='mt-4 mb-5 post-button m-0 btn btn-primary'>Criar tópico</button>
            </main>
        </>
    )
}

export default Criar
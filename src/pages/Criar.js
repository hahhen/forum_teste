import React, { useRef, useState, useEffect } from 'react'
import Header from '../components/header';
import './criar.css'
import { isLight } from '../App';
import { Editor } from '@tinymce/tinymce-react';
import { supersection, section } from '../components/topicInfoSon';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Criar() {
    const location = useLocation()
    var locationstate;
    if (location.state === null) {
        locationstate = 2
    } else {
        locationstate = location.state
    }
    const { from } = locationstate;
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    const [editorKey, setEditorKey] = useState(0);
    useEffect(() => {
        setEditorKey(prevKey => prevKey + 1);
    }, [isLight]);
    return (
        <>
            <Helmet>
                {/* Tags de título e descrição normais */}
                <title>Crie um tópico</title>

                {/* Tags de título e descrição do Twitter */}
                <meta property="twitter:title" content='Crie um tópico' />

                {/* Tags de título e descrição OpenGraph (Facebook, LinkedIn, etc) */}
                <meta property="og:title" content='Crie um tópico' />
            </Helmet>
            <Header />
            <main className='container pt-5'>
                <h1 className={`create-header mb-3`}>Criar tópico</h1>
                <div className='options-wrapper mb-4'>
                    <div className='wrapper-select mb-2'>
                        <label className={`section-select-label`} htmlFor={`section-select`}>Seção: </label>
                        <select defaultValue={from} id='section-select' className={`ps-1 form-select section-select`}>
                            {supersection.slice(1).map((info) =>
                                <optgroup key={info.ssectioncod} label={info.ssectionname}>
                                    {section.filter((info2) => info2.ssection === info.ssectioncod).map((info2) =>
                                        <option value={info2.sectioncod}>{info2.sectionname}</option>
                                    )}
                                </optgroup>
                            )}
                        </select>
                    </div>
                    <div className='wrapper-select mb-2'>
                        <label className={`section-select-label`} htmlFor={`privacy-select`}>Privacidade: </label>
                        <select defaultValue={1} id='privacy-select' className={`form-select ps-1 section-select`}>
                            <option value={1}>Público</option>
                            <option value={2}>Minha instituição</option>
                            <option value={3}>Privado</option>
                        </select>
                    </div>
                </div>
                <div className='title-wrapper mb-4'>
                    <label htmlFor='inTopicTitle' className={`mb-2 label-top`}>Título <small>(obrigatório)</small></label>
                    <input type='text' className='topic-title-input' name='inTopicTitle' id='inTopicTitle' />
                </div>
                <label className={`mb-2 label-top`}>Corpo:</label>
                {
                    <Editor
                        key={editorKey}
                        apiKey='fj80sqetd8mxsjp2pseqiuomat4y6sp4yaq3f5jscu6bkss0'
                        onInit={(evt, editor) => editorRef.current = editor}
                        init={{
                            //Verifica se o tema é light ou dark e aplica a skin de acordo
                            ...(isLight ?
                                {}
                                :
                                {
                                    skin: 'oxide-dark',
                                    content_css: 'dark'
                                }),
                            placeholder: 'Escreva aqui seu tópico!',
                            height: 500,
                            branding: false,
                            mobile: {
                                menubar: true
                            },
                            language: 'pt_BR',
                            promotion: false,
                            htmlAllowedTags: ['.*'],
                            htmlAllowedAttrs: ['.*'],
                            extended_valid_elements: '*[.*]',
                            menubar: true,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount', 'codesample'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | fullscreen | help',
                            content_style: 'body { font-family: sans-serif; font-size:14px }'

                        }}
                    />
                }
                <button id='post-button' className='mt-4 mb-5 post-button m-0 btn btn-primary'>Criar tópico</button>
            </main>
        </>
    )
}

export default Criar
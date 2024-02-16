import React, { useRef, useState } from 'react'
import {
    MDXEditor,
    linkPlugin,
    markdownShortcutPlugin,
    Separator,
    codeMirrorPlugin,
    BlockTypeSelect,
    InsertCodeBlock,
    headingsPlugin,
    quotePlugin,
    listsPlugin,
    thematicBreakPlugin,
    UndoRedo,
    BoldItalicUnderlineToggles,
    toolbarPlugin,
    codeBlockPlugin,
    tablePlugin,
    InsertTable,
    imagePlugin,
    InsertImage,
    linkDialogPlugin,
    ConditionalContents,
    ListsToggle,
    InsertThematicBreak,
    ChangeCodeMirrorLanguage
}
    from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css'
import './editor.css'
import { isLight } from '../../App';
import InsertMathLive from './InsertMathLive';
import EnterFullScreen from './EnterFullScreen';

export var ref

var [autoSaveState, setAutoSaveState] = ['cloud', 'Alterações salvas']

async function imageUploadHandler(media) {
    const formData = new FormData()
    formData.append('media', media)
    const response = await fetch('https://forum-php.vercel.app/api', {
        method: 'POST',
        body: formData
    })
    const json = (await response.json())
    return json
}

function AutoSaveState() {
    [autoSaveState, setAutoSaveState] = useState(['cloud', 'Alterações salvas'])
    return (
        <div className='d-flex ps-1 pe-1 align-items-baseline' style={{ color: 'var(--secondary-font)' }}>
            <i class={`fa-solid fa-2xs fa-${autoSaveState[0]} me-1`}></i>
            <span style={{ fontSize: '10px' }}>{autoSaveState[1]}</span>
        </div>
    )
}

var timeoutID
const autoSave = () => {
    if (autoSaveState[0] === 'cloud') setAutoSaveState(['cloud-upload', 'Armezenando suas alterações...'])
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
        localStorage.setItem('editorAutoSavedContent', ref.current?.getMarkdown());
        setAutoSaveState(['cloud', 'Alterações salvas'])
    }, 3000);
}

function Editor() {
    ref = useRef(null);

    return (
        <div id='editor'>
            <MDXEditor
                markdown={localStorage.getItem('editorAutoSavedContent') || ''}
                onChange={autoSave}
                ref={ref}
                className={`${isLight ? '' : 'dark-theme dark-editor'}`}
                plugins={[
                    //Plugins
                    headingsPlugin(),
                    quotePlugin(),
                    listsPlugin(),
                    tablePlugin(),
                    linkPlugin(),
                    imagePlugin({ imageUploadHandler }),
                    linkPlugin(),
                    linkDialogPlugin(),
                    thematicBreakPlugin(),
                    codeBlockPlugin({ defaultCodeBlockLanguage: 'js' }),
                    codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', html: 'HTML', css: 'CSS' }, theme: isLight ? 'light' : 'dark' }),
                    markdownShortcutPlugin(),
                    //Toolbar
                    toolbarPlugin({
                        toolbarContents: () => (
                            <>
                                <UndoRedo />
                                <Separator />
                                <BlockTypeSelect />
                                <BoldItalicUnderlineToggles />
                                <Separator />
                                <ListsToggle />
                                <Separator />
                                <InsertImage />
                                <Separator />
                                <InsertTable />
                                <InsertThematicBreak />
                                <Separator />
                                <InsertCodeBlock />
                                <InsertMathLive />
                                <Separator />
                                <EnterFullScreen />                                
                                <ConditionalContents
                                    options={[
                                        { when: (editor) => editor?.editorType === 'codeblock', contents: () => <><Separator /><ChangeCodeMirrorLanguage /></> },
                                    ]}
                                />
                            </>
                        )
                    })
                ]}
            />
            <AutoSaveState />
        </div>

    )
}

export default Editor;
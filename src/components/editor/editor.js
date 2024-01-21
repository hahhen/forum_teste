import React, { useEffect, useRef, useState } from 'react'
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
    CreateLink,
    ListsToggle,
    InsertThematicBreak,
}
    from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css'
import './editor.css'
import { isLight } from '../../App';
import InsertMathLive from './InsertMathLive';
import { renderMathInElement } from 'mathlive';

export var ref

var timeoutID
var [autoSaveState, setAutoSaveState] = ['cloud', 'Alterações salvas']
const autoSave = () => {
    if (autoSaveState[0] === 'cloud') setAutoSaveState(['cloud-upload', 'Armezenando suas alterações...'])    
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {        
        localStorage.setItem('editorAutoSavedContent', ref.current?.getMarkdown());
        setAutoSaveState(['cloud', 'Alterações salvas'])
    }, 3000);
    
}

function Editor() {
    [autoSaveState, setAutoSaveState] = useState(['cloud', 'Alterações salvas'])
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
                    markdownShortcutPlugin(),
                    headingsPlugin(),
                    quotePlugin(),
                    listsPlugin(),
                    tablePlugin(),
                    linkPlugin(),
                    imagePlugin(),
                    linkPlugin(),
                    linkDialogPlugin(),
                    thematicBreakPlugin(),
                    codeBlockPlugin({ defaultCodeBlockLanguage: 'js' }),
                    codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS' } }),
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
                                <CreateLink />
                                <Separator />
                                <InsertTable />
                                <InsertThematicBreak />
                                <Separator />
                                <InsertCodeBlock />
                                <InsertMathLive />
                            </>
                        )
                    })
                ]}
            />
            <div className='mt-1 d-flex align-items-center' style={{color: 'var(--secondary-font)'}}>
                <i class={`fa-solid fa-xs fa-${autoSaveState[0]} me-1`}></i>
                <span style={{fontSize: '12px'}}>{autoSaveState[1]}</span>
            </div>
        </div>
        
    )
}

export default Editor;
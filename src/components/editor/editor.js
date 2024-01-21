import React, { useEffect, useRef } from 'react'
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

function Editor() {
    ref = useRef(null);      
    return (
        <div id='editor'>
            <MDXEditor
                ref={ref}
                className={`${isLight ? '' : 'dark-theme dark-editor'}`}
                markdown={''}
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
        </div>
    )
}

export default Editor;
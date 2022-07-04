import React, { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// 工具
import { NoteDetailWrapper } from './style';
import qs from 'qs';
import hljs from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.css'
import { marked } from 'marked';

// 自定义
import Title from './cpns/title';
import Content from 'c/content';
import { getNotesAction } from '../all-note/store/actionCreator';

const NoteDetail = memo(() => {
    // 配置marked
    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: code => hljs.highlightAuto(code).value,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: true,
        smartLists: true,
        smartypants: false
    })

    const dispatch = useDispatch();
    // 获取所有笔记
    const { notesdata } = useSelector(
        state => ({
            notesdata: state.getIn(['notes', 'notes'])
        }), shallowEqual)

    useEffect(() => {
        dispatch(getNotesAction())
    }, [dispatch]);

    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const params = qs.parse(document.location.search.slice(1));
        const { id } = params;
        const theArticle = notesdata.filter(item => item._id === id)[0];
        if (theArticle) {
            const { title, content, type } = theArticle;
            setTitle(title);
            setType(type);
            setContent(content);
        }
    }, [notesdata, document.location.search]);

    return (
        <NoteDetailWrapper>
            <Title title={title} type={type} />
            <Content
                Component={<div className='note-text'
                    dangerouslySetInnerHTML={{ __html: marked(content).replace(/<pre>/g, "<pre id='hlsj'>") }} />} />
        </NoteDetailWrapper>
    )
})

export default NoteDetail;
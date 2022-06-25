import React, { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// 工具
import { NoteDetailWrapper } from './style';
import qs from 'qs';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import { getNotesAction } from '../all-note/store/actionCreator';

const NoteDetail = memo(() => {
    const dispatch = useDispatch();

    // 获取所有笔记
    const { notesdata } = useSelector(
        state => ({
            notesdata: state.getIn(['notes', 'notes'])
        }), shallowEqual)

    useEffect(() => {
        dispatch(getNotesAction())
    }, [dispatch]);

    const [date, setDate] = useState(null);
    const [type, setType] = useState('');
    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState('');
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        const params = qs.parse(document.location.search.slice(1));
        const { id } = params;
        const theArticle = notesdata.filter(item => item._id === id)[0];
        if (theArticle) {
            const { date, tags, title, markdownContent, type } = theArticle;
            setTitle(title);
            setType(type);
            setDate(date);
            setMarkdownContent(markdownContent);
            setTags(tags);
        }
    }, [notesdata, document.location.search]);

    return (
        <NoteDetailWrapper>
            <Title title={title} />
            <Content
                Component={<div className='note-text'></div>} />
        </NoteDetailWrapper>
    )
})

export default NoteDetail;
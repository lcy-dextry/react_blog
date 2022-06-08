import React, { memo, useState } from 'react'

// 工具
import { InputWrapper, ListWrapper, ToDoListWrapper } from './style'
import { Input } from 'antd';

const ToDoList = memo(() => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const [already, setAlready] = useState([]);

    function clickChange(index) {
        const newList = [...list];
        setAlready([...already, newList.splice(index, 1)]);
        setList(newList);
    }

    function enterChange(e) {
        setList([...list, e.target.value]);
        setInput('');
    }

    return (
        <ToDoListWrapper>
            <ListWrapper className='wrap-v2'>
                <ul className='to-do-list'>
                    {
                        list.map((item, index) => {
                            return <li key={item} onClick={e => clickChange(index)}>{item}</li>
                        })
                    }
                </ul>

                <ul className='already-list'>
                    {
                        already.map(item => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
            </ListWrapper>

            <InputWrapper className='wrap-v2'>
                <Input
                    className='input'
                    placeholder="添加待办"
                    value={input}
                    allowClear
                    size='large'
                    onClick={e => e.target.placeholder = ''}
                    onChange={e => setInput(e.target.value)}
                    onPressEnter={e => enterChange(e)}
                />
                <button onClick={e => {setAlready([]);setList([])}}>重置</button>
            </InputWrapper>
            
        </ToDoListWrapper>
    )
})

export default ToDoList
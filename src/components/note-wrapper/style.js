import styled from 'styled-components';

export const NoteWrapper = styled.div`
    position: relative;
    display: flex;
    width: 880px;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    margin-bottom: 20px;
    box-sizing: content-box;
    text-align: center;
    color: #FFF;
    border-radius: 15px;
    background-color: rgba(170,201,193,0.3);
    transition: 0.3s;

    &:hover{
        background-color: #1DA57A;
        transform: scale(1.05, 1.05);
    }

    &:first-child{
        margin-top: 40px;
    }

    &:last-child{
        margin-bottom: 40px;
    }

    .to-note{
        position: absolute;
        width: 920px;
        height: 60px;
        top: 0;
        left: 0;
        background-color: transparent;
        border: transparent;
    }

    .title{
        width: 768px;
        font-size: 22px;
        font-weight: bold;
    }

    .date{
        width: 112px;
        font-size: 18px;
    }
`
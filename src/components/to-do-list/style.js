import styled from 'styled-components';

export const ToDoListWrapper = styled.div`
    margin: 40px 0;

`

export const ListWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;

    ul{
        width: 440px;
        height: 600px;
        border-radius: 15px;

        &::before{
            display: block;
            margin: 10px 0 20px 10px;
            font-size: 30px;
            font-weight: 600;
            color: #FFF;
        }

        li{
            padding-left: 10px;
            width: 100%;
            height: 50px;
            line-height: 50px;
            font-size: 22px;
            font-family: '楷体';
            font-weight: bold;
            
        }
    }

    .to-do-list{
        background-color: rgba(67, 105, 92, 0.3);

        &::before{
            content: '待办';
        }

        li:nth-child(odd){
            background-color: rgba(255, 255, 255, 0.5);
        }
    }

    .already-list{
        
        background-color: rgba(170, 201, 193, 0.3);

        &::before{
            content: '已完成';
        }

        li:nth-child(odd){
            background-color: rgba(255, 255, 255, 0.5);
        }
    }
`

export const InputWrapper = styled.div`
    position: relative;

    .input{
        margin: 20px 0 0 40px;
        width: 300px;
        height: 50px;
        border-radius: 15px;
    }

    button{
        position: absolute;
        top: 20px;
        right: 40px;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 15px;
        background-color: rgba(0, 0, 0, 0.1);
        transition: 0.3s;
        font-size: 16px;
        font-weight: bold;
        color: #1DA57A;

        &:hover{
            color: #FFF;
            background-color: #1DA57A;
        }
    }
`
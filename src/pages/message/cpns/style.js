import styled from "styled-components";

export const MsgWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 920px;
    height: 96px;
    margin-bottom: 20px;
    
    .avatar{
        width: 70px;
        height: 70px;
        border-radius: 14px;
        background-image: url(${require('@/assets/img/head-shot.jpg')});
        background-size: cover;
    }

    .msg-list{
        position: relative;
        width: 830px;
        height: 96px;
        border-radius: 14px;
        background-color: rgba(170,201,193,0.3);
        transition: 0.3s;

        &:hover{
            transform: scale(1.02, 1.02);
        }

        .msg{
            position: absolute;
            top: 20px;
            left: 20px;
            width: 790px;
            font-size: 20px;
            font-family: '宋体';
            color: #FFF;
        }

        .feeling{
            position: absolute;
            left: 20px;
            bottom: 10px;
            width: 20px;
            height: 20px;
            line-height: 20px;
        }

        .date{
            position: absolute;
            right: 20px;
            bottom: 10px;
            width: 200px;
            padding: 0 10px;
            box-sizing: content-box;
            height: 30px;
            line-height: 30px;
            font-size: 18px;
            font-family: Consolas;
            text-align: center;
            color: #FFF;
            background-color: rgba(170,201,193,0.5);
            border-radius: 10px;
            transition: 0.3s;

            &:hover{
                background-color: #1DA57A;
            }
        }
    }
`
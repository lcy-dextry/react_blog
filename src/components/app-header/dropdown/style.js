import styled from "styled-components";

export const DropdownWrapper = styled.div`
    display: none;
    position: absolute;
    z-index: 1;
    top: 50px;
    left: 560px;
    width: 90px;

    &:hover{
        display: block;
    }

    .noteLink-list{
        margin-top: 20px;
        width: 70px;
        padding: 10px;
        box-sizing: content-box;
        border-radius: 14px;
        background-color: #182917;

        a{
            display: block;
            margin: 0;
            width: 70px;
            height: 34px;
            line-height: 34px;
            color: #FFF;
            font-size: 18px;
            font-family: Consolas;
            font-weight: 600;
            text-align: center;
            border-radius: 10px;
            background-color: rgba(170,201,193,0.3);
            transition: 0.3s;

            &:not(:last-child){
                margin-bottom: 10px;
            }

            &:hover,&.active{
                background-color: #1DA57A;
            }
        }
    }
`
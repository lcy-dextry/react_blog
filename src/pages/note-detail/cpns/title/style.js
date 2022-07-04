import styled from "styled-components";

export const TitleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 1000px;
    height: 380px;

    .title{
        width: 1000px;
        height: 88px;
        line-height: 88px;
        margin-top: 100px;
        font-size: 56px !important;
        font-weight: 600;
        color: var(--textColor,#fff);
        /* letter-spacing: 5px; */
        text-shadow: 4px 4px 10px var(--footerBg,rgba(0,0,0,.2));
    }

    .type{
        margin-top: 10px;
        width: 80px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        padding: 0 10px;
        border-radius: 14px;
        background-color: rgba(23,38,15,0.5);
        font-size: 18px;
        font-weight: 600;
        font-family: Consolas;
        color: #fff;
        transition: 0.3s;
    
        &:hover{
            background-color: rgba(60, 240, 160, 0.6);
        }
    }
`
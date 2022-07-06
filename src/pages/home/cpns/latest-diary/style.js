import styled from "styled-components";

export const LatestDiaryWrapper = styled.div`
    margin-top: 20px;
    width: 300px;
    height: 450px;
    padding: 20px 24px;
    border-radius: 14px;
    background-color: rgba(23,38,15,0.5);

    .title{
        width: 252px;
        height: 48px;
        line-height: 48px;
        font-size: 25px;
        font-weight: 700;
        font-family: Consolas,"楷体";
        color: #FFF;

        &::before{
            content: '📔';
            margin-right: 5px;
        }
    }
    >.line{
        width: 252px;
        height: 1px;
        border-bottom: 2px rgba(0, 255, 128, 0.7) dashed;
    }
    .list{
        width: 252px;
        padding: 0;
        margin: 0;
    }
`
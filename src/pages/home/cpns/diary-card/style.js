import styled from "styled-components";

export const DiaryCardWrapper = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    width: 200px;
    padding: 20px;
    /* height: 150px; */
    border-radius: 6px;
    background-color: rgba(0, 255, 128, 0.4);
    transition: all 0.3s;

    &:hover{
        transform: scale(1.05, 1.05);
    }

    .content{
        width: 160px;
        padding: 10px 0;
        font-size: 18px;
        font-weight: 600;
        font-family: Consolas,"楷体";
        color: #FFF;
    }
    >.line{
        width: 160px;
        height: 1px;
        border-bottom: 1px dashed #FFF;
    }
    .date{
        margin-top: 10px;
        width: 160px;
        font-size: 14px;
        font-weight: 600;
        font-family: Consolas,"楷体";
        color: #FFF;
    }
    .feeling{
        margin-bottom: 5px;
        width: 160px;
    }

`
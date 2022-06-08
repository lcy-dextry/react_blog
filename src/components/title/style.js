import styled from 'styled-components';

export const TitleWrapper = styled.div`
    height: 350px;

    div{
        width: 320px;
        height: 88px;
        line-height: 88px;
        text-align: center;
        position: absolute;
        top: calc(25vh);
        left: 50%;
        transform: translateX(-50%);
        font-size: 56px;
        font-weight: 600;
        text-shadow: 2px 2px 6px var(--footerBg,rgba(0,0,0,.3));
        color: #FFF;
    }
`
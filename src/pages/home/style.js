import styled from 'styled-components';

export const HomeWrapper = styled.div`

`

export const HomeCoverWrapper = styled.div`
    position: relative;
    height: calc(100vh);

    span{
        width: 500px;
        position: absolute;
        top: calc(35vh);
        left: 50%;
        transform: translateX(-50%);
        font-size: 56px;
        font-weight: 600;
        text-shadow: 2px 2px 6px var(--footerBg,rgba(0,0,0,.3));
        color: #FFF;
    }
`

export const HomeContentWrapper = styled.div`

`
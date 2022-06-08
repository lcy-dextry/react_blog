import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
    height: 60px;
    background-color: #182917;

    .wrap-v1{
        display: flex;
        justify-content: space-between;

        a{
            display: block;
            height: 44px;
            text-align: center;
            border-radius: 14px;
            font-size: 22px;
            color: #FFFFFF;
        }
    }

    .wrap-v2{
        display: flex;
        justify-content: center;
        margin-top: 6px;

        a{
            width: 70px;
            line-height: 44px;
            margin: 0 10px; 
            font-weight: 700;
            background-color: transparent;
            transition: 0.3s;
    
            &:hover{
            background-color: rgba(60, 240, 160, 0.6);
        }
        }
    }

    .home,.setting{
        position: relative;
        margin-top: 8px;
        width: 60px;
        background-color: transparent;
        transition: 0.3s;

        svg{
            position: absolute;
            top: 8px;
            left: 17px;
        }

        &:hover{
            background-color: rgba(60, 240, 160, 0.6);
        }
    }
`
import styled from 'styled-components';

export const AppFooterWrapper = styled.div`
    height: 120px;
    font-size: 16px;
    font-family: 'dengxian';
    font-weight: bolder;
    color: #FFF;

    .code-link{
        display: flex;
        justify-content: space-around;
        width: 176px;
        margin: 10px auto;

        a{
            color: #FFF;

            &:hover{
                color: rgba(60,240,160,0.6);
            }
        }
    }

    .utils{
        display: flex;
        width: 400px;
        margin: 10px auto;

        button{
            font-weight: bolder;
            padding: 2px 10px;
            border: none;
            border-radius: 5px;
            background-color: transparent;
            transition: 0.3s;

            &:hover{
                background-color: rgba(60,240,160,0.6);
            }
        }
    }

    .backTop{

        div{
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border-radius: 15px;
            background-color: rgba(22, 54, 51, 0.6);
            color: #FFF;
            font-size: 20px;
            background-color: transparent;
            transition: 0.3s;

            &:hover{
                background-color: rgba(60,240,160,0.6);
            }
        }
    }
`
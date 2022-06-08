import styled from 'styled-components';

export const AboutMeWrapper = styled.div`
    margin-top: 40px;
    font-size: 24px;
    font-family: '楷体';
    color: #FFF;

    div{
        margin-left: 40px;
    }

    .tag{
        margin-top: 40px;
        margin-left: 40px;
        font-size: 34px;
        font-weight: 600;

        i{
            margin-right: 20px;
        }
    }

    ul{
        margin-left: 94px;

        &:last-child{
            margin-bottom: 40px;
        }
        
        li{
            margin: 10px 0;
        }

        a{
            color: #FFF;
            text-decoration: underline;
            transition: all 0.3s;

            &:hover{
                color: #1DA57A;
            }
        }
        
    }

`
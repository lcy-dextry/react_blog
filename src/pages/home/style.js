import styled from 'styled-components';

export const HomeWrapper = styled.div`
    .content{
        display: flex;
    }
`

export const HomeCoverWrapper = styled.div`
    position: relative;
    height: calc(100vh);
`

export const HomeContentLeftWrapper = styled.div`
    /* display: flex; */
    .note-list{
        div{
            margin-bottom: 20px;
        }
    }

    .page-changer{
        display: flex;
        justify-content: center;
        height: 50px;
        margin-bottom: 20px;

        li{
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 18px;
            font-weight: 700;
            border: none;
            border-radius: 12px;
            background-color: rgba(170,201,193,0.3);
            transition: all 0.3s;

            &:hover{
                background-color: #1DA57A;
            }

            a{
                color: #FFF;
            }
        }

        .ant-pagination-item-active{
            background-color: #1DA57A;
        }

        button{
            position: relative;
            border: none;
            border-radius: 12px;
            background-color: rgba(170,201,193,0.3);

            svg{
                position: absolute;
                top: 16px;
                left: 16px;
                color: #FFF;
                font-size: 18px;
                font-weight: 700;
            }
        }
    }
`

export const HomeContentRightWrapper = styled.div`
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    margin-left: 20px;
    width: 300px;
    
`
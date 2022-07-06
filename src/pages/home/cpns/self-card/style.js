import styled from "styled-components";

export const SelfCardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    height: 400px;
    padding: 20px 24px;
    border-radius: 14px;
    background-color: rgba(23,38,15,0.5);

    .avatar-part{
        width: 252px;
        height: 185px;

        .img{
            margin: 0 auto;
            width: 110px;
            height: 110px;
            border-radius: 55px;
            background-image: url(${require('@/assets/img/head-shot.jpg')});
            background-size: cover;
            transition: all 0.3s;

            &:hover{
                transform: rotate(1turn);
            }
        }
        .name{
            width: 252px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 25px;
            font-weight: 700;
            font-family: Consolas;
            color: #FFF;
        }
        .introduce{
            width: 252px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            font-size: 18px;
            font-weight: 600;
            font-family: "楷体";
            color: #FFF;
        }
    }

    .web-part{
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;
        width: 252px;

        a{
            width: 80px;
            height: 77px;

            div:first-child{
                width: 80px;
                height: 32px;
                line-height: 32px;
                text-align: center;
                font-size: 18px;
                font-weight: 600;
                font-family: "楷体";
                color: #FFF;
            }
            div:last-child{
                width: 80px;
                height: 45px;
                line-height: 45px;
                text-align: center;
                font-size: 24px;
                font-weight: 600;
                font-family: Consolas;
                color: #1DA57A;
            }
        }
    }

    .guide-part{
        width: 252px;

        .title{
            width: 252px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-radius: 2px;
            background-color: #182917;
            font-size: 18px;
            font-weight: 600;
            font-family: "楷体";
            color: #FFF;
        }
        .social-tools{
            padding: 0;
            margin: 0;
            margin-top: 20px;
            display: flex;
            justify-content: space-evenly;
            width: 252px;

            button{
                display: block;
                width: 15px;
                height: 15px;
                box-sizing: content-box;
                background-color: transparent;
                border: none;
                text-shadow: none;
                box-shadow: none;
                font-size: 16px;
                transition: all 0.3s;

                &:hover{
                    transform: scale(1.12, 1.2);
                }
            }
        }
    }
`
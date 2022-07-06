import styled from "styled-components";

export const NoteDisplayWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 800px;
    height: 200px;
    border-radius: 14px;
    background-color: rgba(23,38,15,0.5);

    .note-card{
        position: absolute;
        left: -200px;
        height: 0;
        display: flex;
        width: 800px;
        height: 200px;
        transition: all 0.3s;

        &:hover{
            left: 0px;

            .second{
                display: block;
            }
        }

        .img-part{
            position: relative;
            width: 350px;
            height: 200px;

            .img{
                width: 350px;
                height: 200px;
            }

            .type{
                position: absolute;
                top: 15px;
                left: 20px;
                padding: 0 5px;
                height: 26px;
                line-height: 26px;
                color: #FFF;
                font-size: 14px;
                font-weight: 700;
                font-family: Consolas, "楷体";
                border-radius: 4px;
                background-color: rgba(23,38,15,0.8);
            }
        }

        .note-part{
            display: flex;
            flex-wrap: wrap;
            align-content: flex-end;
            width: 450px;
            height: 200px;

            .title{
                width: 450px;
                height: 48px;
                line-height: 48px;
                font-size: 26px;
                font-weight: 700;
                font-family: Consolas, "楷体";
                text-align: center;
                color: #FFF;
            }
            
            .date{
                margin-left: 110px;
                padding-top: 20px;
                height: 76px;
                font-size: 18px;
                font-family: Consolas;
                color: #FFF;

                &::before{
                    content: '⌚';
                    font-size: 16px;
                    margin-right: 5px;
                }
            }
        }

        .content-part{
            position: relative;
            width: 200px;
            height: 200px;
            
            .first{
                border-radius: 0 14px 14px 0;
            }
            .content{
                position: relative;
                width: 200px;
                height: 200px;
                background-color: rgba(0, 255, 128, 0.5);

                .second{
                    display: none;
                }
                .text-nowrap{
                    position: absolute;
                    top: 50px;
                    width: 200px;
                    height: 100px;
                    line-height: 25px;
                    font-size: 18px;
                    font-weight: 700;
                    font-family: Consolas, "楷体";
                    color: #FFF;
                }
            }
    }
}
`
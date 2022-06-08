import styled from 'styled-components';

export const PicCardWrapper = styled.div`
    position: relative;
    width: 440px;
    height: 330px;
    margin-top: 40px;

    &:last-child{
        margin-bottom: 40px;
    }

    &:hover .line{
        background-color: #FFF;
    }

    &:hover .desc{
        color: #FFF;
    }

    &:hover img{
            transform: scaleX(105%) scaleY(105%);
        }

    img{
        position: absolute;
        width: 440px;
        height: 330px;
        border-radius: 15px;
        transition: all 0.3s;
    }

    .type{
        position: absolute;
        top: 50px;
        left: 50px;
        color: #FFF;
        font-size: 36px;
        font-weight: 600;
    }

    .line{
        position: absolute;
        top: 100px;
        left: 50px;
        width: 340px;
        height: 5px;
        background-color: transparent;
        transition: 0.3s;
    }

    .desc{
        position: absolute;
        top: 120px;
        left: 50px;
        font-size: 28px;
        font-weight: 500;
        color: transparent;
        transition: 0.3s;
    }
`
import styled from "styled-components";

export const NoteDetailWrapper = styled.div`
    div:first-child{
        font-size: 30px;
    }
    .note-text{
        width: 920px;
        padding: 40px;
        box-sizing: content-box;
        color: #FFF;

        p,h1,h2,h3,li{
            color: #FFF;
        }

        #hlsj{
            width: 880px;
            padding: 10px 20px;
            box-sizing: content-box;
            font-size: 18px !important;
            border-radius: 20px;
            background-color: var(--codeBg, #022c02);
        }

        li::before{
            content: '•';
            margin-right: 5px;
        }

        img{
            width: 550px;
        }
    }

    
`
import { createTheme } from "@mui/material";
import styled from "styled-components";

const theme = createTheme()
export const FooterDiv = styled.footer`
    width: 100%;
    height: 70px;
    background-color: ${theme.palette.grey[900]};
    display: flex;
    align-items: center;
    justify-content: center;

    .text
    {
        color : ${theme.palette.grey[400]};
    }

    .footer__container{
        width: 100%;
        height : 100%;
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
         font-size: 0.6rem;
         @media screen and (min-width: 340px) {
            margin : 0 1rem;
        }
        @media screen and (min-width : 1280px) {
            margin :0 200px;
        }
        div
        {
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
            align-items: center;
            gap : 0.5rem;
        }
    }
`
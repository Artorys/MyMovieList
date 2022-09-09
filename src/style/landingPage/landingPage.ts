import styled from 'styled-components'
import { theme } from "../../components/Header/style";


export const DivLanding = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    border-radius: 10px;
    width: max-content;
    height: max-content;
    margin: auto auto;
    background-color: rgb(232, 144, 5,0.3);
    .divForm{
        width: auto;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 1rem;
        text-align: center;
        .div_img
        {
            background-color: rgb(30, 30, 30,0.8);
            border-radius: 20px;
            
        }
        .ticket
        {
            padding : 0.5rem;
        }
    }
    

    .button{
        color: white;
        border: 2px solid transparent;
        border-style: none;
        border-radius: 18px;
        width: 140px;
        height: 60px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 18px;
        text-decoration: none;
        margin: 10px;
        cursor: pointer;
    }
`
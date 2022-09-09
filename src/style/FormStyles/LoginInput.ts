import styled from 'styled-components'

export const LoginInputContainer = styled.div`
    display: flex;
    align-items: center;
    
    border-radius: 16px;
    border: 2px solid white;

    height: 19%;
    max-height: 52px;
    width: 100%;

    padding-left: 10px;

    margin-bottom: 9px;
    margin-top: 8px;

    input {
        height: 100%;
        width: 100%;

        border-style: none;

        background-color: transparent;
        color: white;

        font-size: 16px;

        margin: none;

        box-sizing: border-box;
        padding-left: 10px;

        outline: none;
    }

    input::placeholder {
        color: rgb(251, 251, 251, 0.5);
        font-size: 14px;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus {
        -webkit-text-fill-color: white;
        border-radius: 8px;
        transition: background-color 5000s ease-in-out 0s;
        transition-delay: 5000s;
    }

    svg {
        height: 20px;
        width: 20px;
    }

`

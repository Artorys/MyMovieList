import styled from "styled-components";

interface IFormContainer {
    formHeight: string,
}

export const FormContainer = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;

    img {
        box-sizing: border-box;
        margin-top: 30px;
    }

    form {
        height: ${(p: IFormContainer) => p.formHeight};
        width: 80%;
        max-width: 322px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        box-sizing: border-box;
        margin-bottom: 10vh;
        margin-top: 7vh;
    }

    p{
        box-sizing: border-box;
        border-top: 1px solid white;
        padding: 5px 25px;
        max-width: 80vw;
        font-family: inherit;
        margin-bottom: 20px;
    }
`
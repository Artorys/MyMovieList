import styled from "styled-components";




export const MainDiv = styled.div`

    width: 100%;
    overflow: auto;
    background-color: #0D0D0F;
    display: flex;
    justify-content: center;

`

export const ContentDiv = styled.div`
    overflow: hidden;
    display: flex;
    min-height: max-content;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 73%;
    min-width: 320px;
    height: 100%;


`


export const TitleDiv = styled.div`
    margin-top: 150px;
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-family: inter;
        font-size: 70px;
        color: #F5C600;
    }

    h3{
        font-size: 35px;
        color: white;
    }

`

export const MoviesDiv = styled.div`
    margin-top: 150px;
    width: 100%;
    gap: 1rem;
    justify-content: center;
    display: flex;
  
    flex-wrap: wrap;


    .movie-item{
        
        margin-top: 50px;
        width: 18%;
        min-width: 150px;
        height: 140px;
        background-color:burlywood;
        border: 1px solid black;
    }
`
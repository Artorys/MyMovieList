import styled from "styled-components";




export const MainDiv = styled.div`

    width: 100%;
    overflow: auto;
    background-color: #0D0D0F;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const ContentDiv = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 73%;
    min-width: 320px;
    height: auto;


`


export const TitleDiv = styled.div`
    margin: 60px 0;
    width: auto;
    height: auto;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        text-align: center;
        font-family: inter;
        font-size: 2rem;
        color: #F5C600;
    }

    h3{
        font-size: 1rem;
        color: white;
    }

`

export const MoviesDiv = styled.div`
    width: 100%;
    height: 100%;
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
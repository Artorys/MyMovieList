import styled from "styled-components";

export const DivGeneral = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #080808;
  display: flex;

  .div-user {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    justify-content: space-evenly;
  }

  .div-container-infos-user {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .div-avatar {
    width: 80px;
    height: 80px;
    background-color: #141414;
    border-radius: 100%;
    margin-top: 5px;
  }

  .div-infos-user {
    display: flex;
    flex-direction: column;
    color: #ffffff;
  }

  .arrow {
    color: #ffffff;
  }

  .div-container-input {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-search {
    width: 70%;
    height: 30px;
    border: none;
    border-radius: 20px;
    background-color: #141414;
    color: #ffffff;
  }

  .div-container-genres {
    width: 100%;
    height: 180px;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .div-container-genres::-webkit-scrollbar {
    width: 5px;
  }

  .div-container-genres::-webkit-scrollbar-track {
    background-color: #080808;
  }

  .div-container-genres::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 10px;
    border: 7px solid #080808;
  }

  .div-genres {
    width: 200%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  button {
    width: 130px;
    height: 32px;
    border: none;
    border-radius: 20px;
    color: #ffffff;
    margin: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  span {
    font-size: 20px;
  }

  .div-title-favorites {
    color: #ffffff;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .header-favorite {
    font-weight: bold;
  }

  .div-container-favorites {
    width: 90%;
    height: 210px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid yellow;
  }

  .movie-star {
    width: 14%;
    height: 15px;
    background-color: #141414;
    color: #ffffff;
    border-radius: 20px;
    font-size: 12px;
    margin: 5px 0 0 5px;
  }

  .favorite-bottom {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .button-watch {
    width: 115px;
    height: 32px;
    border: none;
    border-radius: 20px;
    background-color: #F5C600;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    margin-left: 5px;
  }

  .button-add-movie {
    width: 10%;
    height: 32px;
    border: none;
    background-color: #141414;
    color: #ffffff;
    cursor: pointer;
    border-radius: 100px;
    font-size: 20px;
    margin-right: -28px;
  }

  .div-movies {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
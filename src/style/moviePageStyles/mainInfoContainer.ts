import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: max-content;

    box-sizing: border-box;
    margin-top: 177px;

    top: 0;
    left: 0;
    
    position: absolute;

    z-index: 5;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: white;

    .mainTop {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .mainTitle {
        color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 13.13%;
    }

    .mainTitle h2 {
        font-size: 4.2vw;
        font-weight: 900;
        margin-bottom: 23px;
        user-select: none;
        -webkit-user-select: none;
    }

    .directorsContainer {
        display: flex;

        width: 42vw;

        overflow-x: hidden;
    }

    .directorInfo{
        width: max-content;

        display: flex;
        align-items: center;

        margin-bottom: 13px;
        margin-right: 33px;
    }

    .directorInfo img {
        width: 66px;
        height: 66px;

        border: 3px solid #e89005;
        border-radius: 50%;
    }

    .directorInfo p {
        font-size: 21px;
        font-weight: 600;

        color: #e89005;

        margin-left: 7px;
    }


    .mainSubTitle {
        display: flex;
        width: max-content;
        height: 42px;
        justify-content: flex-start;

        margin-left: 4px;

        font-size: 1.2rem;

        color: rgba(251, 251, 251, 0.5);

        font-weight: 100;
        margin-bottom: 3vw;

        align-items: center;

        user-select: none;
        -webkit-user-select: none;
    }

    .mainSubTitle span{
        box-sizing: border-box;

        margin-right: 7px;
        padding-bottom: 5px;

        display: flex;
        align-items: flex-end;

        font-size: 21px;
    }

    .averageRating {
        margin-left: 7px;
    }

    .mainPoster {
        width: 18vw;
        height: 28vw;

        border: 0.6vw solid rgba(0, 0, 0, 0.2);

        box-sizing: content-box;
    }

    .mainOverview{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .mainOverview h3 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 25px;
    }

    .mainOverview p {
        text-align: left;
        width: 47vw;
        max-height: 20%;

        margin-bottom: 10px;
    }

    .mainOverview p:first-of-type{
        margin-bottom: 22px;

        line-height: 27px;

        color: #ffffff88;

        max-height: 189px;
        
        overflow-y: scroll;
    }

    .mainOverview p:first-of-type

    .mainOverview p:nth-of-type(2){
        color: #ffffff77;
    }

    .mainOverview p span{
        color: #e89005;
        font-weight: 600;
    }

    .subContainer {
        width: 80%;
    }

    .subContainerDivided {
        width: 100%;

        display: flex;
        justify-content: space-between;

        margin-top: 4vw;
    }

    .subContainerDivided h4, .commentSection h4 {
        font-size: 25px;
        font-weight: 600;
        text-align: left;
        margin-bottom: 24px;
        margin-top: 42px;
    }

    .subContainerRight {
        width: 18vw;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .mainCastContainer{
        max-width: 45vw;
        width: max-content;

        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    .mainCast {

        display: flex;
        justify-content: flex-start;
        align-items: center;

        overflow-x: scroll;

        border: 2px solid #e89005;
        border-radius: 7px;

        padding: 10px;
        margin-right: 20px;

        padding-top: 20px;
    }

    .mainCast::-webkit-scrollbar,
    .mainOverview p:first-of-type::-webkit-scrollbar {
        background-color: rgba(0, 0, 0, 0);

        border-radius: 8px;

        height: 10px;
    }

    .mainCast::-webkit-scrollbar-thumb,
    .mainOverview p:first-of-type::-webkit-scrollbar-thumb {
        background-color: #e8900577;

        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .mainCast::-webkit-scrollbar-thumb:hover,
    .mainOverview p:first-of-type::-webkit-scrollbar-thumb:hover {
        background-color: #e89005;
    }

    .castCard {
        display: flex;
        width: max-content;
        min-width: max-content;
        align-items: center;
        justify-content: flex-start;

        font-weight: 100;
        font-size: 20px;
        
        margin-right: 27px;
        margin-bottom: 10px;

        color: #ffffff66;
    }

    .castCard:last-of-type {
        margin-right: 0px;
    }

    .castCard img{
        width: 66px;
        height: 66px;

        border-radius: 50%;
        border: 3px solid #e89005;

        margin-right: 13px;
    }

    .platformsContainer {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: center;
    }

    .platformsContainer img{
        width: 77px;

        margin-right: 33px;
        margin-bottom: 33px;
    }

    .trailerContainer {
        margin-top: 30px;
    }

    .genresContainer {
        display: flex;
        flex-wrap: wrap;
    }

    .genreCard {
        color: #000;
        background-color: #e89005;

        margin-right: 13px;
        padding: 8px 16px;

        border-radius: 4px;
        border: 2px solid transparent;

        font-size: 20px;
        font-weight: 700;

        cursor: pointer;
        transition: 0.25s;
    }

    .genreCard:hover{
        border: 2px solid #e89005;

        background-color: transparent;
        color: #e89005;
    }

    .trailerContainer {
        width: 40vw;
        height: 22.5vw;
    }

    .commentSection {
        width: 80%;

        margin-top: 77px;
    }

    .commentInputContainer {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding-bottom: 55px;
    }

    .commentsContainer {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding-top: 33px;
    }

    .commentCard {
        width: 97%;
        
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        margin-bottom: 66px;
        border-bottom: 1px solid #00000055;
        padding-bottom: 27px;
    }

    .userInfo {
        width: max-content;

        display: flex;
        align-items: center;
    }

    .userInfo img {
        width: 66px;
        height: 66px;

        border-radius: 50%;
        border: 3px solid #e89005;
    }

    .userInfo h5 {
        color: #e89005;

        font-weight: 700;
        font-size: 18px;

        margin-left: 13px;
    }

    .commentCard p {
        padding-left: 79px;
        padding-top: 13px;

        color: #ffffff88;
    }

    .commentArea {
        width: 66%;
        height: 177px;

        padding-left: 13px;
        padding-top: 13px;
        margin-top: 33px;
        margin-bottom: 21px;

        background-color: transparent;
        border: 5px solid #e98005;
        border-radius: 21px;

        color: white;
        font-size: 16px;
    }

    .commentArea:focus {
        outline: none;
    }

    .similarMoviesContainer {
        width: max-content;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2vw;
    }

    @media (max-width: 1542px) {
        .mainTop {
            align-items: flex-start;
        }

        .mainTitle {
            padding-top: 0px;
        }

        .mainPoster {
           width: 277px;
           height: 430px;
        }

        .subContainerRight {
            width: 277px
        }

        .similarMoviesContainer {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 1020px) {
        .similarMoviesContainer{
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 950px) {

        margin-top: 13vw;

        .mainPoster{
            width: 300px;
            height: 400px;

            margin-bottom: 50px;
        }

        .mainTop {
            flex-direction: column-reverse;
            align-items: center;
        }

        .mainTitle {
            width:100%
        }

        .mainSubTitle {
            display: flex;

            margin-bottom: 0px;
        }


        .mainSubTitle span {
            font-size: 20px;
        }

        .titleContainer {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 50px;
            height: 66px;
        }

        .titleContainer h2 {
            font-size: 42px;
            margin-bottom: 0px;
        }

        .mainOverview {
            width: 100%
        }

        .mainOverview h3 {
            font-size: 27px;
        }

        .mainOverview p:first-of-type {
            width: 100%;
        }

        .mainCastContainer {
            max-width: 100%;
        }

        .subContainerDivided {
            flex-direction: column;
        }

        .subContainerRight {
            width: 100%;

            margin-top: 24px;
        }

        .genreCard {
            margin-right: 9px;
            padding: 5px 10px;

            font-size: 16px;
        }

        .trailerContainer {
            width: 80vw;
            height: 45vw;
        }

        .userInfo img{
            width: 50px;
            height: 50px;
        }

        .commentCard p {
            padding-left: 63px;
        }

        .commentArea {
            width: 100%;
        }
    }

    @media (max-width: 870px){
        .titleContainer{
            display: flex;
            flex-direction: column;
            height: 77px;
            align-items: center;
        }

        .titleContainer h2 {
            margin-bottom: 17px;
        }
        
        .castCard img {
            width: 42px;
            height: 42px;
        }

        .castCard p {
            font-size: 16px;
        }

        .similarMoviesContainer {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 520px) {
        .mainPoster {
            width: 60vw;
            height: 82vw;
        }

        .titleContainer h2 {
            font-size: 8vw;
        }

        .mainSubTitle{
            font-size: 4vw;

            align-items: center;
        }

        .ratingContainer span{
            font-size: 7vw !important;
        }

        .averageRating {
            font-size: 3.3vw !important;
        }

        .mainOverview{
            margin-top: 33px;
        }

        .subContainerDivided h4 {
            font-size: 20px;
        }

        .castCard img {
            width: 33px;
            height: 33px;
        }

        .castCard p {
            font-size: 13px;
        }
    }
`
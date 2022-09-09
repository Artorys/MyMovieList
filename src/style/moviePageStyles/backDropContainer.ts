import styled from 'styled-components'

interface IBDContainerProps{
    url: string,
}

export const BackDropContainer = styled.div`
    width: 100vw;
    height: 999px;

    position: absolute;

    top: 0;
    left:0;

    background-image: url(${(p: IBDContainerProps) => p.url});
    background-size: cover;
    background-position: center;

    filter: brightness(0.60);

    mask-image: url(${(p: IBDContainerProps) => p.url});
    z-index: 1;

    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));

    @media (max-width: 1400px) {
        height: 89vh;
    }

    @media (max-width: 1330px) {
        height: 85vh;
    }

    @media (max-width: 1260px) {
        height: 81vh;
    }

    @media (max-width: 1190px) {
        height: 77vh;
    }

    @media (max-width: 1120px) {
        height: 73vh;
    }

    @media (max-width: 1050px) {
        height: 69vh;
    }

    @media (max-width: 980px) {
        height: 65vh;
    }

    @media (max-width: 910px) {
        height: 62vh;
    }

    @media (max-width: 860px) {
        height: 59vh;
    }

    @media (max-width: 790px){
        height: 56vh;
    }

    @media (max-width: 720px) {
        height: 53vh;
    }

    @media (max-width: 650px) {
        height: 50vh;
    }

    @media (max-width: 580px) {
        height: 47vh;
    }

    @media (max-width: 510px) {
        height: 44vh;
    }

    @media (max-width: 440px) {
        height: 41vh;
    }
`
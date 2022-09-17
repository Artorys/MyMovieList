import {keyframes} from "styled-components";
import styled from "styled-components"
import { theme } from "../CardItem/style";
interface ISpanProps
{
  children : string
}
export const DivCarousel = styled.div`
position: relative;
width:100%;
height: auto;

.swiper {
  position: relative;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
  border-radius: 4px;
  padding: 1rem;
  width: auto;
  height:100%;
    @media screen and (min-width: 0px) {
            margin : 0 1rem;
        }
        @media screen and (min-width : 1280px) {
            margin :0 200px;
        }
        .swiper-button-prev
        {
          color: #fff;
        }
        .swiper-button-next
        {
          color: #fff;
        }
}

.swiper-slide {
      background-position: center center;
      background-size:100% 100%;
      background-repeat: no-repeat;
      border-radius: 4px;
      height: 200px;

      @media screen and (min-width : 400px) {
          height: 300px;
      }
      @media screen and (min-width : 600px) {
          height: 400px;
      }
      @media screen and (min-width : 800px) {
          height: 500px;
      }
    }
  .coming
        {
          width: 60px;
          height: 60px;
          right: 0;
          top: 0;
          opacity: 0.5;
          position: absolute;
          z-index: 1;
          @media screen and (min-width : 600px) {
            width: 100px;
            height: 100px;
          }
        }
  img
  {
    width: 100%;
    height: 100%;
  }

`
export const SpanEdited = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-flow: column;
  height: auto;
  padding: 1rem;
  gap: 1rem;
  background-color: ${theme.palette.grey[900]};
  left: 50%;
  bottom : 0px;
  transform: translate(-50%, -0%);
  cursor: pointer;
  h2
  {
    color: #D9D9D9;
    text-shadow: 2px 2px black;
    font-size: 1rem;
    font-weight: 800;
    @media screen  and (min-width : 600px){
      font-size: 2rem;
  
  
    }
  }
  .date
  {
    color: #fff;
    text-shadow: 2px 2px black;
    width: auto;
    height: auto;
  }

`
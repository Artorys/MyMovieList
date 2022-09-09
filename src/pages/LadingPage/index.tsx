import { Link } from "react-router-dom";
import { DivLanding } from "../../style/landingPage/landingPage";
import loginSVG from "../../style/images/loginSVG.svg";
import registerSVG from "../../style/images/registerSVG.svg";
import { useContext, useEffect } from "react";
import { TrendingMovies } from "../../services/apiTMDB";
import { TrendingContext } from "../../context/TrendingContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"
import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper"
import { base_ImageUrl } from "../../services/api";
import { Button, Typography,createTheme,ThemeProvider } from "@mui/material";

const themeDefault = createTheme({
    components : 
    {
      MuiTypography : 
      {
        styleOverrides : 
        {
          root : 
          {
            textShadow : "2px 1px black"
          }
        }
      }
    }
  })
export const theme = createTheme(
  {
    palette : 
    {
      primary : 
      {
        main : themeDefault.palette.grey[400]
      },
      secondary : 
      {
        main : "#e89005",
        contrastText : themeDefault.palette.grey[200]
      }
    }
  })
export default function LadingPage() {
  const {trending,setTrending} = useContext(TrendingContext)
  useEffect(()=>
  {
    async function getTrending()
    {
      const trending = await TrendingMovies()
      setTrending(trending)
    }
    getTrending()
  },[])
  return (
<>
  <Swiper modules={[Autoplay,Navigation]} style={{position : "relative",width : "100vw",height : "100vh"}} navigation = {{nextEl : ""}} autoplay = {{delay : 5000,disableOnInteraction : false}} loopPreventsSlide updateOnImagesReady = {true} preventClicks = {true} preloadImages = {true} slideToClickedSlide = {true} loop = {true} centeredSlides>

          {trending?.results?.map((movie,index)=>       
          {
            if(index == 1 || index == 3 || index == 4 || index == 7 || index == 8 || index == 10 || index == 13 || index == 14 || index == 16 || index == 18 || index == 19 || index == 17 || index == 0 )
            {
            return(
              <div key={movie.id}>
                {movie.backdrop_path && <SwiperSlide key={index} style={{backgroundRepeat : "no-repeat",backgroundPosition : "auto auto",backgroundSize : "100% 100%",backgroundImage :`url(${base_ImageUrl}${movie.backdrop_path})`}}>
                </SwiperSlide>} 
              </div>
              )
            }
          })}
    <ThemeProvider theme={theme}>
            <DivLanding>
                <div className="divForm">
                  <div className="div_img">
                    <img src={loginSVG} alt="ticket icon" />
                  </div>
                    <Typography textOverflow={"ellipsis"} mt={"1rem"} color = {`${theme.palette.grey[200]}`}>If you already have an account</Typography>
                    <Link className="button" to={"/login"}>
                      <Button color = {"secondary"} variant="contained">Log in</Button>
                    </Link>
                  </div>

                  <div className="divForm">
                    <div className="div_img ticket">
                      <img src={registerSVG} alt="" />
                    </div>
                    <Typography textOverflow={"ellipsis"} mt={"1rem"} color = {`${theme.palette.grey[200]}`}>If you don't have an account, register</Typography>
                    <Link className="button" to={"/register"}>
                     <Button color = {"secondary"} variant="contained">Register</Button>
                    </Link>
                  </div>
        </DivLanding>
      </ThemeProvider>
    </Swiper>
  </>
  );
}


import React, { useContext,useEffect } from "react";
import { DivCarousel,SpanEdited } from "./style";
import {ComingSoonContext} from "../../context/comingSoonContext"
import {GetComingSoonMovies} from "../../services/apiTMDB"
import { base_ImageUrl } from "../../services/api";
import "swiper/css";
import "swiper/css/navigation";
import {Swiper,SwiperSlide} from "swiper/react";
import {Navigation,EffectCoverflow,Autoplay,Pagination} from "swiper"
import img from "../../assets/images/movies-removebg-preview.png"
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
function SimpleSlider()
{
    const {coming,setComing,setComingPerPage,comingPerPage} = useContext(ComingSoonContext)
    const {setMovie_Id} = useContext(AuthContext)
    const navigate = useNavigate()
    function movieNavigate(){
        navigate("/movie")
    }
    useEffect(()=>
    {
        async function Get()
        {
            const comingMovies = await GetComingSoonMovies(comingPerPage).then(res=> res.results)
            setComing(comingMovies)
        }
        Get()
    })
    return (
      <DivCarousel>
        <Swiper autoplay loopPreventsSlide breakpoints={
          {
            0 : 
            {
              slidesPerView : 1
            },
            600 : 
            {
              slidesPerView : 2,
            }
          }} updateOnImagesReady = {true} preventClicks = {true} preloadImages = {true} slideToClickedSlide = {true} spaceBetween = {10} loop = {true} centeredSlides navigation={true} coverflowEffect = {{
            
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 5,
            slideShadows : true,}} pagination = {true} effect = "coverflow" modules={[Navigation,Autoplay,EffectCoverflow,Pagination]}>
          {coming.map((movie)=>       
          {
            return (
            <SwiperSlide style={{backgroundImage : `url(${base_ImageUrl}${movie.backdrop_path})`}} key={movie.id}>
              <SpanEdited>{movie.original_title}</SpanEdited>
              <img className="coming" src={`${img}`} alt='coming soon'></img>
              <p className="date">{movie.release_date}</p>
            </SwiperSlide>
            )
          })}
      </Swiper>
      </DivCarousel>
    );
  }
export {SimpleSlider}
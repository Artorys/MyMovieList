import Header from "../../components/Header";

import {useState} from "react"
import {ContentBox, MainDiv, MovieListBox,theme, themeDefault} from "./style";
import Footer from "../../components/Footer";
import {SimpleSlider} from "../../components/Carousel";
import { popularMovieContext } from "../../context/popularMovieContext";
import { useContext, useEffect} from "react";
import {GetRatedMovie,GetPopularMovies, GetGenresOfMovies,} from "../../services/apiTMDB";
import {RatedContext} from "../../context/ratedContext"
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {Button, Skeleton, CardMedia, IconButton, useMediaQuery,ThemeProvider,Grid, Typography, Box, Card} from "@mui/material";
import CardItem  from "../../components/CardItem";
import {Swiper,SwiperSlide} from "swiper/react"
import {Navigation,Pagination} from "swiper"
import "swiper/css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { getVideo} from "../../context/playContext";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StarsIcon from '@mui/icons-material/Stars';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { GenresOfMoviesContext } from "../../context/GenresOfMoviesContext";
import Filter9PlusIcon from '@mui/icons-material/Filter9Plus';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import netFlix from "../../assets/images/plataformas/netflix.png"
import disney from "../../assets/images/plataformas/disney-plus-logo 1.png"
import hbo from "../../assets/images/plataformas/HBO-Max-Logo 1.png"
import globo from "../../assets/images/plataformas/globo 1.png"
import primevideo from "../../assets/images/plataformas/primevideo1.png"
import { stremerContext } from "../../context/stremerPlataform";
import { genresContext } from "../../context/GenresContext";






export default function Home(){

    const navigate = useNavigate();
    const {popularPerPage,SetPopularPerPage,popularMovies,setPopularMovies} = useContext(popularMovieContext)
    const {ratedPages,setRatedPages,ratedPerPage,setRatedPerPage} = useContext(RatedContext)
    const {genresOfMovies,setGenresOfMovies} = useContext(GenresOfMoviesContext)
    const { setPlataforma,setFilmes  } = useContext(stremerContext)
    const { setGenres,setFilmesGenres, filmesGenres, genres  } = useContext(genresContext)
    const [showgenre,setShowgenre] = useState<boolean>(false)
    
    useEffect(()=>
    {
        async function getPopular()
        {
            const movie = await GetPopularMovies(popularPerPage)
            setPopularMovies((oldresults)=> 
            {
              if(oldresults.length > 0)
              {
                const newResult = oldresults.filter((results)=>
                {
                  if(results.page !== movie.page)
                  {
                    return results
                  }
                })
                return newResult.concat(movie)
              }
              else
              {
                return oldresults.concat(movie)
              }
            })
        }
        async function getRated()
        {
            const movie = await GetRatedMovie(ratedPerPage)
            setRatedPages((oldresults)=> 
            {
              if(oldresults.length > 0)
              {
                const newResult = oldresults.filter((results)=>
                {
                  if(results.page != movie.page)
                  {
                    return results
                  }
                })
                return newResult.concat(movie)
              }
              else
              {
                return oldresults.concat(movie)
              }
            })
        }
        async function getGenres()
        {
            const movie = await GetGenresOfMovies()
            setGenresOfMovies((oldresults)=> 
            {
                return movie
            })
        }
        getPopular()
        getRated()
        getGenres()
    },[])


    function navigateToExpand(group : string){
        const toNavigate = `/extend/${group}`
            navigate(toNavigate, { replace: true });
    }

    return (
        <>
        <Header/>
        <MainDiv>
           <ContentBox>
            <SimpleSlider/>
            <ThemeProvider theme = {theme}>


                <div className="MovieSection">
                    <MovieListBox>

                        <div className="BoxHeader">
                

                        <Box gap={"5px"} alignItems = {'center'} display = "flex" flexDirection={"row"}>
                            <Typography className = "title">Trending</Typography>
                            <LocalFireDepartmentIcon fontSize="small" color="primary"></LocalFireDepartmentIcon>
                        </Box>
                       <Button  onClick={()=> navigateToExpand('trending')} size="small" color = "secondary" variant="contained" endIcon = {<LocalMoviesIcon></LocalMoviesIcon>}><Typography>See All</Typography></Button>
                        </div>
                        <div className="BoxMain">
                            <Swiper navigation = {
                                {
                                    nextEl : ".next",
                                    prevEl : ".prev",
                                }} breakpoints = {
                                {
                                    0 : 
                                    { 
                                        slidesPerView : 1,
                                        spaceBetween : 20
                                    },
                                    360 : 
                                    {
                                        slidesPerView : 2,
                                        spaceBetween : 20
                                    },
                                    700 : 
                                    {
                                        slidesPerView : 3,
                                        spaceBetween : 20
                                    },
                                    920 : 
                                    {
                                        slidesPerView : 4,
                                        spaceBetween : 20
                                    }

                                }} modules={[Navigation,Pagination]}>
                                    
                                   <>
                                    {popularMovies.map(({results})=>
                                        {
                                            return results.map((movies,index)=>
                                            {
                                                const videos = getVideo(movies.id)
                                                movies.url = videos                                       
                                                    if(index < 8)
                                                    {
                                                        return(
                                                            <SwiperSlide key={movies.id}>
                                                                <CardItem movies={movies}></CardItem>
                                                            </SwiperSlide>
                                                        )
                                                    }
                                                })
                                        })}
                                   </> 
                                    <div className="next">
                                        <IconButton color="primary" size="medium">
                                            <NavigateNextIcon fontSize="large"></NavigateNextIcon>
                                        </IconButton>
                                    </div>
                                    <div className="prev">
                                        <IconButton color="primary" size="large">
                                            <NavigateBeforeIcon  fontSize="large"></NavigateBeforeIcon>
                                        </IconButton>
                                    </div>
                            </Swiper>
                        </div>
                    </MovieListBox>
                    <MovieListBox>
                        <div className="BoxHeader">
                        <Box gap={"5px"} alignItems={"center"} display = "flex" flexDirection={"row"}>
                            <Typography className = "title">Top Rated</Typography>
                            <StarsIcon fontSize="small" sx = {{paddingBottom : "3px",marginBottom : "3px"}} color = "primary"></StarsIcon>
                        </Box>
                        <Button onClick={()=> navigateToExpand('top')} size="small" color = "secondary" variant="contained" endIcon = {<LocalMoviesIcon></LocalMoviesIcon>}><Typography>See All</Typography></Button>
                        
                        </div>
                        <div className="BoxMain">
                            <Swiper navigation = {
                                    {
                                        nextEl : ".next",
                                        prevEl : ".prev",
                                    }} breakpoints = {
                                    {
                                        0 : 
                                        { 
                                            slidesPerView : 1,
                                            spaceBetween : 20
                                        },
                                        360 : 
                                        {
                                            slidesPerView : 2,
                                            spaceBetween : 20
                                        },
                                        700 : 
                                        {
                                            slidesPerView : 3,
                                            spaceBetween : 20
                                        },
                                        920 : 
                                        {
                                            slidesPerView : 4,
                                            spaceBetween : 20
                                        }

                                    }} modules={[Navigation,Pagination]}>
                                        
                                    <>
                                        {ratedPages.map(({results})=>
                                            {
                                                return results.map((movies,index)=>
                                                {                                      
                                                        if(index < 8)
                                                        {
                                                            return(
                                                                <SwiperSlide key={movies.id}>
                                                                    <CardItem key={index} movies={movies}></CardItem>
                                                                </SwiperSlide>
                                                            )
                                                        }
                                                    })
                                            })}
                                    </> 
                                        <div className="next">
                                            <IconButton color="primary" size="medium">
                                                <NavigateNextIcon fontSize="large"></NavigateNextIcon>
                                            </IconButton>
                                        </div>
                                        <div className="prev">
                                            <IconButton color="primary" size="large">
                                                <NavigateBeforeIcon  fontSize="large"></NavigateBeforeIcon>
                                            </IconButton>
                                        </div>
                            </Swiper>
                        </div>
                    </MovieListBox>
                    <MovieListBox>
                    <div className="BoxHeader">
                        <Box gap={"5px"} alignItems={"center"} display = "flex" flexDirection={"row"}>
                            <Typography className = "title">Genres</Typography>
                            <Filter9PlusIcon sx = {{paddingBottom : "3px",marginBottom : "3px"}}  fontSize="small" color = "primary"></Filter9PlusIcon>
                        </Box>
                        <Button onClick = {()=>
                            {
                                setShowgenre((oldValue)=> !oldValue)

                            }} size="small" color = "secondary" variant="contained" endIcon = {<LocalMoviesIcon></LocalMoviesIcon>}><Typography>{showgenre ? "Close All" : "See All"}</Typography></Button>
                        
                        </div>
                        <ThemeProvider theme = {themeDefault}>
                            <div className="BoxMain">
                                <ThemeProvider theme = {theme}>
                                    <Grid width="100%" position={"relative"} margin={" 1rem"} columns = {{xs : 1,sm : 2, md : 3,lg : 4}} container rowSpacing={2} columnSpacing = {1}>
                                {genresOfMovies.map((genres,index)=>
                                {
                                        if(showgenre)
                                        {
                                            return(
                                            <Grid key ={genres.id} display = "flex" justifyContent={"center"} item xs = {1} sm = {1} md = {1} lg = {1}>
                                                    <Button onClick={()=> {
                                                        switch(genres.name){
                                                            case "Action" :
                                                         
                                                            setGenres(28)
                                                                navigateToExpand("Action")
                                                                break;
                                                            case "Adventure":
                                                         
                                                            setGenres(12)
                                                                navigateToExpand("Adventure")
                                                                break;
                                                            case "Animation" :
                                                         
                                                            setGenres(16)
                                                                navigateToExpand("Animation")
                                                                break;
                                                            case "Comedy" :
                                                         
                                                            setGenres(35)
                                                                navigateToExpand("Comedy")
                                                                break;
                                                            case "Crime" :
                                                         
                                                            setGenres(80)
                                                                navigateToExpand("Crime")
                                                                break;
                                                            case "Documentary" :
                                                         
                                                            setGenres(99)
                                                                navigateToExpand("Documentary")
                                                                break;
                                                            case "Drama" :
                                                         
                                                            setGenres(18)
                                                                navigateToExpand("Drama")
                                                                break;
                                                            case "Family" :
                                                         
                                                            setGenres(10751)
                                                                navigateToExpand("Family")
                                                                break;
                                                            case "Fantasy" :
                                                         
                                                            setGenres(14)
                                                                navigateToExpand("Fantasy")
                                                                break;
                                                            case "History" :
                                                         
                                                            setGenres(36)
                                                                navigateToExpand("History")
                                                                break;
                                                            case "Horror" :
                                                         
                                                            setGenres(27)
                                                                navigateToExpand("Horror")
                                                                break;
                                                            case "Music" :
                                                         
                                                            setGenres(10402)
                                                                navigateToExpand("Music")
                                                                break;
                                                            case "Mystery" :
                                                         
                                                            setGenres(9648)
                                                                navigateToExpand("Mystery")
                                                                break;
                                                            case "Romance" : 
                                                         
                                                            setGenres(10749)
                                                                navigateToExpand("Romance")
                                                                break;
                                                            case "Science Fiction" :
                                                         
                                                            setGenres(878)
                                                                navigateToExpand("ScienceFiction")
                                                                break;
                                                            case "TV Movie" :
                                                         
                                                            setGenres(10770)
                                                                navigateToExpand("TvMovie")
                                                                break;
                                                            case "Thriller" :
                                                         
                                                            setGenres(53)
                                                                navigateToExpand("Thriller")
                                                                break;
                                                            case "War" :
                                                         
                                                            setGenres(10752)
                                                                navigateToExpand("War")
                                                                break;
                                                            case "Western" :
                                                         
                                                            setGenres(37)
                                                                navigateToExpand("Western")
                                                                break;
                                                       
                                                    }
                                                    }} sx = {{width : "120px",height: "80px"}} variant = "contained" color = "info">{genres.name}</Button>
                                            </Grid>
                                            )
                                        }
                                        if(!showgenre && index < 6)
                                        {                 
                                            return(
                                                <Grid key ={genres.id} display = "flex" justifyContent={"center"} position={"relative"} item xs = {1} sm = {1} md = {1}>
                                                    <ThemeProvider theme = {theme}>
                                                        <Button onClick={()=> {
                                                        switch(genres.name){
                                                            case "Action" :
                                                                setGenres(28)
                                                                navigateToExpand("Action")
                                                                break;
                                                            case "Adventure":
                                                         
                                                            setGenres(12)
                                                                navigateToExpand("Adventure")
                                                                break;
                                                            case "Animation" :
                                                         
                                                            setGenres(16)
                                                                navigateToExpand("Animation")
                                                                break;
                                                            case "Comedy" :
                                                         
                                                            setGenres(35)
                                                                navigateToExpand("Comedy")
                                                                break;
                                                            case "Crime" :
                                                         
                                                            setGenres(80)
                                                                navigateToExpand("Crime")
                                                                break;
                                                            case "Documentary" :
                                                         
                                                            setGenres(99)
                                                                navigateToExpand("Documentary")
                                                                break;
                                                            case "Drama" :
                                                         
                                                            setGenres(18)
                                                                navigateToExpand("Drama")
                                                                break;
                                                            case "Family" :
                                                         
                                                            setGenres(10751)
                                                                navigateToExpand("Family")
                                                                break;
                                                            case "Fantasy" :
                                                         
                                                            setGenres(14)
                                                                navigateToExpand("Fantasy")
                                                                break;
                                                            case "History" :
                                                         
                                                            setGenres(36)
                                                                navigateToExpand("History")
                                                                break;
                                                            case "Horror" :
                                                         
                                                            setGenres(27)
                                                                navigateToExpand("Horror")
                                                                break;
                                                            case "Music" :
                                                         
                                                            setGenres(10402)
                                                                navigateToExpand("Music")
                                                                break;
                                                            case "Mystery" :
                                                         
                                                            setGenres(9648)
                                                                navigateToExpand("Mystery")
                                                                break;
                                                            case "Romance" : 
                                                         
                                                            setGenres(10749)
                                                                navigateToExpand("Romance")
                                                                break;
                                                            case "Science Fiction" :
                                                         
                                                            setGenres(878)
                                                                navigateToExpand("ScienceFiction")
                                                                break;
                                                            case "TV Movie" :
                                                         
                                                            setGenres(10770)
                                                                navigateToExpand("TvMovie")
                                                                break;
                                                            case "Thriller" :
                                                         
                                                            setGenres(53)
                                                                navigateToExpand("Thriller")
                                                                break;
                                                            case "War" :
                                                         
                                                            setGenres(10752)
                                                                navigateToExpand("War")
                                                                break;
                                                            case "Western" :
                                                         
                                                            setGenres(37)
                                                                navigateToExpand("Western")
                                                                break;
                                                       
                                                    }
                                                    }} sx = {{width : "120px",height: "80px"}} variant = "contained" color = "info">{genres.name}</Button>
                                                    </ThemeProvider>
                                                </Grid>
                                            )
                                        }
                                    })}
                                </Grid> 
                            </ThemeProvider>
                            </div>
                        </ThemeProvider>
                    </MovieListBox>
                    <MovieListBox>

                        <div className="BoxHeader">
                            <Box gap={"5px"} alignItems={"center"} display = "flex" flexDirection={"row"}>
                                <Typography className = "title">Streaming Platforms</Typography>
                                <LiveTvIcon fontSize="small" sx = {{paddingBottom : "3px",marginBottom : "3px"}} color = "primary"></LiveTvIcon>
                            </Box>
                        </div>
                    <ThemeProvider theme = {themeDefault}>
                        <div className="BoxMain">
                            <Swiper navigation = {
                                {
                                    nextEl : ".next",
                                    prevEl : ".prev",
                                }} breakpoints = {
                                {
                                    0 : 
                                    { 
                                        slidesPerView : 1,
                                        spaceBetween : 20
                                    },
                                    360 : 
                                    {
                                        slidesPerView : 2,
                                        spaceBetween : 20
                                    },
                                    700 : 
                                    {
                                        slidesPerView : 3,
                                        spaceBetween : 20
                                    },
                                    920 : 
                                    {
                                        slidesPerView : 4,
                                        spaceBetween : 20
                                    }

                                }} modules={[Navigation,Pagination]} className="box_media">
                                <SwiperSlide>         
                                        <Card className = {"card"} sx = {{justifyContent : "center",display : "flex",flexFlow : "column",height : "200px",backgroundImage : "linear-gradient(to left, #e80914, #d0060f, #b80409, #a00205, #8a0000)"}}>
                                            <CardMedia className = {"media"} component={"div"}sx = {{backgroundImage : `url(${netFlix})`}} onClick={() => {
                                               
                                                setPlataforma(8)
                                                navigateToExpand("netflix")
                                                }}>

                                            </CardMedia>
                                        </Card>
                                </SwiperSlide>
                                <SwiperSlide >
                                         <Card className = {"card"} sx = {{justifyContent : "center",display : "flex",flexFlow : "column",height : "200px",backgroundImage : "linear-gradient(to right, #01a3da, #2983b1, #2f6589, #2b4963, #222f3e)"}}>
                                            <CardMedia className = {"media"} component={"div"}sx = {{backgroundImage : `url(${primevideo})`}} onClick={() => {
                                                setFilmes([])
                                                setPlataforma(119)
                                                navigateToExpand("prime")
                                                }}>
                                                
                                            </CardMedia>
                                        </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <Card className = {"card"}sx = {{justifyContent : "center",display : "flex",flexFlow : "column",height : "200px",backgroundImage : "linear-gradient(to right, #090013, #201535, #36225c, #4d3084, #673daf, #6d4cc6, #725cdd, #756cf5, #667df9, #5d8bf9, #5b98f7, #62a4f3)"}}>
                                            <CardMedia className = {"media"} component={"div"}sx = {{backgroundImage : `url(${hbo})`}} onClick={() => {
                                                setFilmes([])
                                                setPlataforma(384)
                                                navigateToExpand("hbom")
                                                }}>
                                                
                                            </CardMedia>
                                        </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <Card className = {"card"}sx = {{justifyContent : "center",display : "flex",flexFlow : "column",height : "200px",backgroundImage : "linear-gradient(to right, #ddf8fd, #c8f0fb, #b5e7fc, #a3defd, #94d4fe, #77c5ff, #5cb4ff, #46a3ff, #0088fe, #006cf9, #004cef, #1320df)"}}>
                                            <CardMedia className = {"media"} component={"div"}sx = {{backgroundImage : `url(${disney})`}} onClick={() => {
                                                setFilmes([])
                                                setPlataforma(337)
                                                navigateToExpand("disney")
                                                }}>
                                                
                                            </CardMedia>
                                        </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <Card className = {"card"}sx = {{justifyContent : "center",display : "flex",flexFlow : "column",height : "200px",backgroundImage : "linear-gradient(to left, #fe0134, #fb1135, #f81b36, #f52238, #f22839, #f23237, #f33a34, #f34232, #f6502b, #f95d23, #fa691a, #fb750e)"}}>
                                            <CardMedia className = {"media"} component={"div"}sx = {{backgroundImage : `url(${globo})`}} onClick={() => {
                                                setFilmes([])
                                                setPlataforma(307)
                                                navigateToExpand("globo")
                                                }}>
                                                
                                            </CardMedia>
                                        </Card>
                                </SwiperSlide>
                                <ThemeProvider theme = {theme}>
                                    <div className="next">
                                        <IconButton color="primary" size="medium">
                                            <NavigateNextIcon fontSize="large"></NavigateNextIcon>
                                        </IconButton>
                                    </div>
                                    <div className="prev">
                                        <IconButton color="primary" size="large">
                                            <NavigateBeforeIcon  fontSize="large"></NavigateBeforeIcon>
                                        </IconButton>
                                    </div>
                                </ThemeProvider>
                            </Swiper>
                        </div>
                    </ThemeProvider>
                    </MovieListBox>
                </div>
            </ThemeProvider>
            </ContentBox>
        </MainDiv>
        <Footer/>
        </>

    )
}
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SettingsApplications} from "@mui/icons-material";
import { ReactElement, useContext } from "react";
import {
  CardContent,
  CardActions,
  CardMedia,
  ThemeProvider,
  Typography,
  useMediaQuery,
  Button,
  Box,
  Tooltip,
  Skeleton,
} from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { IResults } from "../../interfaces/axiosReponseApiTmdb";
import { CardItemStyled, theme } from "./style";
import { base_ImageUrl } from "../../services/api";
import { ImdbSVG } from "../ImdbSVG";
import ReactPlayer from 'react-player/youtube'
import { getVideo, IPlay, IPlayContext, PlayContext } from "../../context/playContext";
import { useRef } from "react";
import {memo} from "react"
import { useMemo } from "react";
import { Images } from "../../services/apiTMDB";
import { LoadingCardContext } from "../../context/LoadCardContext";
interface ICardItemProps
{
    movies : IResults,
  }
function CardItem({movies} : ICardItemProps ) : ReactElement
  {
    const navigate = useNavigate();
    function movieNavigate(id : string | undefined) {
      navigate(`/movie/${id}`);
    }
  const {play,setPlay} = useContext<IPlayContext>(PlayContext)
    let timeout: ReturnType<typeof setTimeout>;
    const hover = useRef<typeof timeout>(setTimeout(()=> null))
    const settingHover = useMemo(()=> settingPlay,[play,setPlay])
    const {setLoading,loading} = useContext(LoadingCardContext)
    useEffect(()=>
    {
        async function getUrl()
        {
            const videos = await getVideo(movies.id)
            const image = await Images(movies.id)
            movies.url = videos  
            setPlay((oldValue)=> 
            {
                const newArray : Array<IPlay> = oldValue.filter((value,index)=>
                {
                    if(value.id != movies.id)
                    {      
                        return {id : value.id,play : false,url : `${value.url}`,image : `${image}`}
                    }
                })
                return [...newArray,{id : movies.id,play : false,url : `${videos}`,image : `${image}`}]
            })
        }
        getUrl()
    },[])
    function settingPlay(isPlay : boolean,ElId : string | undefined)
    {
        if(isPlay)
        {
            setPlay((oldValue)=>
            {
                const newArray = oldValue.map((value)=>
                {
                    if(value.id == ElId)
                    {
                        if(!value.play)
                        {
                            value.play = true
                            return value
                        }
                    }
                    return value
                })
                return newArray
            })
        }
        else
        {
            setPlay((oldValue)=>
            {
                const newArray = oldValue.map((value)=>
                {
                    if(value.id == ElId)
                    {
                        
                        if(value.play)
                        {
                            value.play = false
                            return value
                        }
                    }
                    return value
                })
                return newArray
            })
        }
    }
    return(
        <ThemeProvider theme = {theme} >
                <CardItemStyled className="Card" id={`${movies.id}`} onMouseOver={(eve)=>
                    {
                        const idElement = (eve.target as HTMLDivElement).closest(".Card")?.id                       
                        hover.current = setTimeout(()=>
                        {
                            settingHover(true,idElement)
                        },1500)
                        
                    }} onMouseOut = {(eve)=>
                    {
                        const idElement = (eve.target as HTMLDivElement).closest(".Card")?.id
                        settingHover(false,idElement)
                        clearTimeout(hover.current)
                    }}>
                        {play.map((value,index)=>
                        {                        
                            
                            if(value.play && movies.id == value.id)
                            {
                                return  <ReactPlayer  autoPlay = {true}  playing = {true} volume={0.347} key = {movies.id} width={"100%"} height={"60%"} url={`${value.url}`}></ReactPlayer>
                            }
                            if(!value.play && movies.id == value.id && value.image)
                            {
                                if(value.image)
                                {
                                    return(
                                    <div style = {{height : "60%"}} key = {movies.id} className="box_content">
                                        <CardMedia height={"100%"} component = "img" image = {`${base_ImageUrl}${value.image}`}>
                                        </CardMedia>
                                        <Box className = "box_imdb" padding = {"1rem 1rem 0 1rem"} marginRight={"5px"} display = "flex" gap = {"4px"} flexDirection = "column" justifyContent= "center" alignItems= "center" top = {"0"} left={0} position={"absolute"} zIndex = {20}>       
                                            <ImdbSVG className = "imdb"></ImdbSVG>
                                            <Typography sx = {{textShadow : "1px 1px black"}} fontWeight={800} variant="body1" color = {"primary"}>{movies.vote_average.toFixed(2)}</Typography>
                                        </Box>
                                    </div>                                                                      
                                    )
                                }
                            }
                        })}                
                                <CardContent sx = {{width : "100%"}}> 
                                    <Box width={"100%"} gap = "5px" display = {"flex"} flexDirection = "column" justifyContent = "start">
                                        <Typography textOverflow={"ellipsis"} noWrap fontWeight={700} color={theme.palette.grey[400]} variant = "body1">{movies.title}</Typography>
                                        <Typography variant = "body2" color = "GrayText">Popularity</Typography>
                                    </Box>
                                <Box position={"relative"} display = {"flex"}>
                                    <Typography variant = "body2" color = "GrayText">{movies.popularity}</Typography>      
                                    <Visibility sx={{width : "10px",height : "10px",position : "absolute", right : "0"}} color="primary"></Visibility>                                              
                                </Box>
                            </CardContent>
                        <CardActions>
                            <Box  width = {"100%"} display={"flex"} justifyContent = {"space-between"}>
                                <Button  onClick={() => {
                                        window.scrollTo(0, 0);
                                        movieNavigate(movies.id);}} size="small" sx = {{fontWeight : 600,}} color = "primary" variant="text">more</Button>
                                {movies.overview ?          
                                <Tooltip title = {movies.overview}>
                                    <Button>
                                        <Typography variant = "body2" color = "GrayText">Resume</Typography>
                                    </Button>
                                </Tooltip>
                                : <Button disabled><Typography sx = {{textDecoration : "line-through",opacity : 0.5}} variant = "body2" color = "GrayText">Resume</Typography></Button>
                                }
    
                            </Box>
                        </CardActions>
            </CardItemStyled>
        </ThemeProvider>
    )
}
export default memo(CardItem)

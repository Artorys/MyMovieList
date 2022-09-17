import { HeaderDiv, theme } from "./style";
import {useContext, useEffect, useState} from "react"
import MovieIcon from '@mui/icons-material/Movie';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Box,ThemeProvider,Modal,Toolbar,Grid,MenuList, Divider,Typography,IconButton,Button,Tooltip,Menu,MenuItem, useMediaQuery, SwipeableDrawer, Input, InputAdornment, InputLabel} from "@mui/material"
import { GenresOfMoviesContext } from "../../context/GenresOfMoviesContext";
import { GetGenresOfMovies, SearchMovies } from "../../services/apiTMDB";
import { SearchContext } from "../../context/SearchContext";
import { stremerContext } from "../../context/stremerPlataform";
export default function Header (){

    function navigateToExpand(group : string){
        const toNavigate = `/extend/${group}`
            navigate(toNavigate, { replace: true });
    }
    useEffect(()=>
    {
        async function getGenres()
        {
            const movie = await GetGenresOfMovies()
            setGenresOfMovies((oldresults)=> 
            {
                return movie
            })
        }
        getGenres()
    },[])
    const navigate = useNavigate()
    const [elOrigin,setElOrigin] = useState<HTMLElement | null>(null)
    const open = Boolean(elOrigin)
    const [mobileMenu,setMobileMenu] = useState<boolean>(false)
    const [openModal,setOpenModal] = useState<boolean>(false)
    const [count,setCount] = useState<number | string>("")
    const {genresOfMovies,setGenresOfMovies} = useContext(GenresOfMoviesContext)
    const { setPlataforma,setFilmes  } = useContext(stremerContext)
    const menuResponsive = useMediaQuery(theme.breakpoints.down("sm"))
    const {search,setSearch,input,setInput,searchPerPage,setSearchPerPage} = useContext(SearchContext)
    return (
        <ThemeProvider theme = {theme}>
            <>
            <HeaderDiv>
                <Box margin={{xs : "0 1rem",sm : "0 1rem",xl : "0 200px"}} width={"auto"} height = "100%">
                    <Toolbar disableGutters sx = {{display : "flex",justifyContent : "space-between"}}>
                       <Box sx = {{mt : "0.6rem",display : "flex",alignItems : "center"}}>
                            <MovieIcon color="secondary" fontSize={"large"}></MovieIcon>
                            <Typography letterSpacing={1} fontWeight={900} sx = {{mt : "0.5rem"}} fontSize = {{xs : "1rem", sm : "2rem"}} variant="body2" color={`${theme.palette.grey[300]}`}>IMovieList</Typography>
                       </Box>
                       {menuResponsive
                       ?
                       <Toolbar>
                        <Box marginTop={"1rem"}>
                            <IconButton onClick = {(eve)=> setMobileMenu(oldValue => !oldValue) } color = "secondary">
                                    <MenuIcon color = "secondary" fontSize="large"></MenuIcon>
                            </IconButton>
                        </Box>
                        <SwipeableDrawer PaperProps={{sx : {backgroundColor : theme.palette.grey[900]}}} onOpen={()=> setMobileMenu(oldValue=> !oldValue)} onClose = {()=>
                            {
                                setMobileMenu(oldValue=> !oldValue)
                            }} open = {mobileMenu}>
                            <Tooltip placement="right" title = "Home page">
                                <IconButton onClick = {()=>
                                    {
                                        setPlataforma(0)
                                        navigate("/home")
                                    }}>
                                    <HomeIcon fontSize="large" color = "secondary"></HomeIcon>
                                </IconButton> 
                            </Tooltip>
                            <Tooltip placement="right" title = "Discovery movies">
                                <IconButton onClick = {()=> setOpenModal(oldValue=> !oldValue)}>
                                    <ExploreIcon fontSize="large" color = "secondary"></ExploreIcon>
                                </IconButton>                               
                            </Tooltip>
                            <Tooltip placement="right" title = "Account">
                                <IconButton onClick={(eve)=> 
                                    {
                                        setElOrigin(eve.currentTarget)
                                    }} color = "secondary">
                                    <AccountCircleIcon fontSize="large" color = "secondary"></AccountCircleIcon>
                                </IconButton>
                            </Tooltip>
                            <Menu  anchorOrigin={{horizontal : "right",vertical : "center"}} PaperProps={{sx : { width : "120px",backgroundColor : theme.palette.grey[400] }}} open = {open} anchorEl = {elOrigin} onClose = {()=> setElOrigin(null)}>
                                    <MenuList disablePadding>
                                        <MenuItem>
                                        <Tooltip placement="right" title = {"Profile settings"}>
                                            <Button onClick = {()=>
                                    {
                                        navigate("/userprofile")
                                    }} sx = {{textTransform : "none"}} endIcon = {<BuildCircleIcon sx = {{mb : "0.3rem"}}></BuildCircleIcon>}>
                                                <Typography>
                                                    Profile
                                                </Typography>
                                            </Button>
                                        </Tooltip>
                                        </MenuItem>
                                    </MenuList>
                                    <Divider sx = {{my : 0.5}}></Divider>
                                        <MenuList disablePadding>
                                            <MenuItem>
                                            <Tooltip placement="right" title = "Exit">
                                                <Button onClick = {()=>
                                                    {
                                                        localStorage.clear()
                                                        navigate("/login")
                                                    }} sx = {{textTransform : "none"}} endIcon = {<LogoutIcon sx = {{textTransform : "none",mb : "0.3rem"}}></LogoutIcon>}>
                                                    <Typography variant="body2">
                                                        Logout
                                                    </Typography>
                                                </Button>
                                            </Tooltip>
                                            </MenuItem>
                                        </MenuList>
                            </Menu> 
                        </SwipeableDrawer>
                       </Toolbar> 
                       : 
                       <Box sx = {{mt : "0.8rem",display : "flex",alignItems : "center"}}>
                            <Tooltip title = "Home page">
                                <Button onClick = {()=>
                                    {
                                        setPlataforma(0)
                                        navigate("/home")
                                    }} sx = {{display : "flex",alignItems : "center"}} startIcon = {<HomeIcon fontSize="large" color = "secondary"></HomeIcon>}>
                                <Typography  fontWeight={600} sx = {{mt : "0.3rem"}} fontSize={"1rem"} variant="body2" color={`${theme.palette.grey[300]}`}>Home</Typography>
                                </Button>
                            </Tooltip>
                            <Tooltip title = "Discovery movies">
                                <Button onClick = {()=> setOpenModal(oldValue=> !oldValue)} sx = {{display : "flex",alignItems : "center"}} startIcon = {<ExploreIcon fontSize="large" color = "secondary"></ExploreIcon>}>
                                <Typography  fontWeight={600} sx = {{mt : "0.2rem"}} fontSize={"1rem"} variant="body2" color={`${theme.palette.grey[300]}`}>Discovery</Typography>
                                </Button>
                            </Tooltip>
                            <Tooltip title = "Account">
                                <IconButton onClick={(eve)=> 
                                    {
                                        setElOrigin(eve.currentTarget)
                                    }} color = "secondary">
                                    <AccountCircleIcon fontSize="large" color = "secondary"></AccountCircleIcon>
                                </IconButton>
                            </Tooltip>
                            <Menu PaperProps={{sx : {backgroundColor : theme.palette.grey[400] }}} open = {open} anchorEl = {elOrigin} onClose = {()=> setElOrigin(null)}>
                                    <MenuList>
                                        <MenuItem>
                                        <Tooltip placement="left" title = {"Profile settings"}>
                                            <Button onClick = {()=>
                                    {
                                        navigate("/userprofile")
                                    }} endIcon = {<BuildCircleIcon sx = {{mb : "0.3rem"}}></BuildCircleIcon>}>
                                                <Typography>
                                                    Profile
                                                </Typography>
                                            </Button>
                                        </Tooltip>
                                        </MenuItem>
                                    </MenuList>
                                    <Divider sx = {{my : 0.5}}></Divider>
                                        <MenuList>
                                            <MenuItem>
                                            <Tooltip placement="left" title = "exit">
                                                <Button onClick = {()=>
                                                    {
                                                        localStorage.clear()
                                                        navigate("/login")
                                                    }} endIcon = {<LogoutIcon sx = {{mb : "0.3rem"}}></LogoutIcon>}>
                                                    <Typography>
                                                        Logout
                                                    </Typography>
                                                </Button>
                                            </Tooltip>
                                            </MenuItem>
                                        </MenuList>
                            </Menu>
                        </Box>}
                       
                    </Toolbar>
                </Box>
            </HeaderDiv>
        <Modal sx = {{mt : "0",display : "flex",justifyContent : "center",alignItems : "center"}} open = {openModal} onClose = {()=> {
            setCount("")
            setOpenModal(oldValue=> !oldValue)}
            }>
            <Box width = "auto" height = "auto">
                <Box height = "auto" overflow={"auto"} display = "flex" flexDirection={"column"} alignItems = "center" justifyContent= "center"  borderRadius={"5px"} padding={"1rem"} sx = {{backgroundColor : theme.palette.grey[900]}}>
    
                    <Box sx = {{display : "flex",justifyContent : "center",alignItems : "center",gap : "5px"}}>
                            <InputLabel htmlFor="search">
                                <Button onClick={async(eve)=>
                                {
                                    try
                                    {
                                        const searchInput = await SearchMovies(input)
                                        const {total_pages,total_results,page,results} = searchInput
                                        setCount(total_results)
                                        if(results?.length == 0)
                                        {
                                            setCount("Your search not exists") 
                                        }
                                    }catch(err)
                                    {
                                        setCount("Your search not exists")
                                    }
                                }} 
                                variant="outlined">
                                    <Typography fontSize = "0.7rem" color = "secondary">Search</Typography>
                                </Button>
                            </InputLabel>
                            <Input onChange={(eve)=> {
                                setInput(eve.target.value)}
                                } id = "search" startAdornment = {<InputAdornment position = "start"><SearchIcon color = "secondary"></SearchIcon></InputAdornment>}></Input>
                    </Box>
                        <Box margin = {"2rem 0 2rem 0"} position = "relative" display = "flex" justifyContent={"center"} alignItems = "center" width = "100%" height = "50px">
                           {typeof count == "number" && count && <Typography sx = {{display  :"flex",gap :"4px"}} color = {theme.palette.grey[400]} fontWeight={400}>You have {count} results</Typography>} 
                           {typeof count == "string" && count && <Typography sx = {{display  :"flex",gap :"4px"}} color = {theme.palette.grey[400]} fontWeight={400}>{count}</Typography>}
                           {typeof count == "string" && !count && <Typography sx = {{display  :"flex",gap :"4px"}} color = {theme.palette.grey[400]} fontWeight={400}>Search something...</Typography>}
                            <Button onClick={async(eve)=>
                                {
                                    try
                                    {
                                        const searchInput = await SearchMovies(input)
                                        const {total_pages,total_results,page,results} = searchInput
                                        setCount(total_results)
                                        if(results?.length == 0)
                                        {
                                            setCount("Your search not exists") 
                                        }
                                        else
                                        {
                                            setSearch(oldValue => [...oldValue,searchInput])
                                            navigateToExpand(`search/${input}`)
                                        }
                                    }catch(err)
                                    {
                                        setCount("Your search not exists")
                                    }
                                }} sx = {{position : "absolute", bottom : 0, right : 0}}>Show</Button>
                        </Box>
                    <hr style ={{width : "100%"}}></hr>
                    <Box display = "flex" justifyContent={"start"} gap = "5px" mt = "0.5rem" width = "auto" height = "auto">
                        <Button variant="outlined"><Typography textTransform={"none"} variant = "body2">Genres</Typography></Button>
                    </Box>
                    <Grid justifyContent={"center"} rowSpacing={3} margin = {"1rem"} padding={"0 1rem"} columnSpacing = {0} columns = {2}
                    overflow={"auto"} container width={"300px"} 
                    height = {100}>
                        {genresOfMovies.map((genre)=>
                        {
                            return (<Grid onClick = {(eve)=>
                            {
                                navigateToExpand((genre.name).replace(/\s/g, ""))
                            }} key = {genre.id} item xs = {1} display={"flex"} justifyContent = "center">
                                        <Button sx = {{width : "120px",height: "50px"}} variant = "contained" color = "secondary"><Typography variant = "body2">{genre.name}</Typography></Button>
                                   </Grid>) 
                        })}
                    </Grid>
                    <hr style ={{width : "100%"}}></hr>               
                    <Box display = "flex" justifyContent={"start"} gap = "5px" mt = "1.5rem" width = "auto" height = "auto">
                        <Button variant="outlined"><Typography textOverflow={"ellipsis"} textTransform={"none"} variant = "body2">Streaming Platforms</Typography></Button>     
                    </Box> 
                    <Grid justifyContent={"center"} rowSpacing={2} margin = {"1rem 0rem"} padding={"0 1rem"} columns = {1}
                    overflow={"auto"} container width={"300px"}
                    height = {120}>
                        <Grid item xs = {1} display={"flex"} justifyContent = "center">
                                            <Button onClick={() => {
                                                setFilmes([])
                                                setPlataforma(8)
                                                navigateToExpand("netflix")
                                                }} sx = {{width : "120px",height: "50px"}} variant = "contained" color = "secondary">Netflix</Button>
                                    </Grid> 
                                    <Grid padding = "1rem" item xs = {1} display={"flex"} justifyContent = "center">
                                            <Button onClick={() => {
                                                setFilmes([])
                                                setPlataforma(119)
                                                navigateToExpand("prime")
                                                }} sx = {{width : "120px",height: "50px"}} variant = "contained" color = "secondary">Prime Video</Button>
                                    </Grid> 
                                    <Grid padding = "1rem" item xs = {1} display={"flex"} justifyContent = "center">
                                            <Button onClick={() => {
                                                setFilmes([])
                                                setPlataforma(384)
                                                navigateToExpand("hbom")
                                                }} sx = {{width : "120px",height: "50px"}} variant = "contained" color = "secondary">Hbo Max</Button>
                                    </Grid> 
                                    <Grid padding = "1rem"item xs = {1} display={"flex"} justifyContent = "center">
                                            <Button onClick={() => {
                                                setFilmes([])
                                                setPlataforma(337)
                                                navigateToExpand("disney")
                                                }} sx = {{width : "120px",height: "50px"}} variant = "contained" color = "secondary">Disney Plus</Button>
                                    </Grid> 
                                    <Grid padding = "1rem" item xs = {1} display={"flex"} justifyContent = "center">
                                            <Button onClick={() => {
                                                setFilmes([])
                                                setPlataforma(307)
                                                navigateToExpand("globo")
                                                }} sx = {{width : "120px",height: "50px"}} variant = "contained" color = "secondary">Globo Play</Button>
                                    </Grid> 
                    </Grid>
                </Box>
            </Box>
        </Modal>
            </>
        </ThemeProvider>
        )
}

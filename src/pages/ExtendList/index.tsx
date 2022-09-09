import { useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import  CardItem  from "../../components/CardItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { popularMovieContext } from "../../context/popularMovieContext";
import { RatedContext } from "../../context/ratedContext";
import {ComingSoonContext} from "../../context/comingSoonContext";
import { GetComingSoonMovies, GetPopularMovies, GetRatedMovie } from "../../services/apiTMDB";
import { ContentDiv, MainDiv, MoviesDiv, TitleDiv } from "./style";
import { stremerContext } from "../../context/stremerPlataform";
import { apiTMDb } from "../../services/api";
import { IReponsePlataformStremer } from "../../interfaces/axiosReponseApiTmdb";
import { genresContext } from "../../context/GenresContext";
import {Button, ThemeProvider} from "@mui/material"
import { theme } from "../LadingPage";
import { SearchContext } from "../../context/SearchContext";





export default function ExtendList(){
    const navigate = useNavigate()
    const { group } = useParams();
    const {popularPerPage,SetPopularPerPage,popularMovies,setPopularMovies} = useContext(popularMovieContext)
    const {ratedPages,ratedPerPage,setRatedPages,setRatedPerPage} = useContext(RatedContext)
    const {coming} = useContext(ComingSoonContext)
    const { filmes, setPage } = useContext(stremerContext)
    const { filmesGenres, setPageGenres,setGenres, genres, setFilmesGenres } = useContext(genresContext)
    const {search,setSearch} = useContext(SearchContext)

   
    useEffect(()=>
    {
      if(group)
      {
        switch(group){
          case "Action" :
       
          setGenres(28)
              break;
          case "Adventure":
       
          setGenres(12)
              break;
          case "Animation" :
       
          setGenres(16)
              break;
          case "Comedy" :
            
          setGenres(35)
              break;
          case "Crime" :
       
          setGenres(80)
              break;

          case "Documentary" :
       
          setGenres(99)
              break;

          case "Drama" :
       
          setGenres(18)
              break;
          case "Family" :
       
          setGenres(10751)
              break;
          case "Fantasy" :
       
          setGenres(14)
              break;
          case "History" :
       
          setGenres(36)
              break;
          case "Horror" :
       
          setGenres(27)
              break;
          case "Music" :
       
          setGenres(10402)
              break;
          case "Mystery" :
       
          setGenres(9648)
              break;

          case "Romance" : 
       
          setGenres(10749)
          break;

          case "Science Fiction" :
       
          setGenres(878)
              break;
          case "TV Movie" :
       
          setGenres(10770)
              break;
          case "Thriller" :
       
          setGenres(53)
              break;
          case "War" :
          setGenres(10752)
              break;
          case "Western" :
       
          setGenres(37)
              break;
      }
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
        getPopular()
        getRated()
      }
    },[])


    
    return (
        <>
            <Header/>
            <MainDiv>
                <ContentDiv className="content">
                    <TitleDiv>
                        { group ===  'trending' && (
                          <>
                            <h1>Trending</h1>
                            <h3>Trending Movies</h3>
                          </>
                        )
                        }

                        { group ===  'top' && (
                          <>
                            <h1>Top-Rated</h1>
                            <h3>Top-Rated Movies</h3>
                          </>
                        )
                        }

                        { group ===  'netflix' && (
                          <>
                            <h1>Netflix</h1>
                            <h3>Netflix Movies</h3>
                          </>
                        )
                        }

                        { group ===  'upcoming' && (
                          <>
                            <h1>Upcoming</h1>
                            <h3>Upcoming Movies</h3>
                          </>
                        )
                        }

                        { group ===  'globo' && (
                          <>
                            <h1>Globoplay</h1>
                            <h3>Globoplay Movies</h3>
                          </>
                        )
                        }
                        
                        
                        { group ===  'disney' && (
                          <>
                            <h1>Disney+</h1>
                            <h3>Disney+ Movies</h3>
                          </>
                        )
                        }

                        
                        { group ===  'hbom' && (
                          <>
                            <h1>Hbo Max</h1>
                            <h3>Hbo Max Movies</h3>
                          </>
                        )
                        }
                        
                        { group ===  'prime' && (
                          <>
                            <h1>Prime video</h1>
                            <h3>Prime video Movies</h3>
                          </>
                        )
                        }

                        { group ===  'Action' && (
                          <>
                            <h1>Action</h1>
                            <h3>Action Movies</h3>
                          </>
                        )
                        }
                        { group ===  'Adventure' && (
                          <>
                            <h1>Adventure</h1>
                            <h3>Adventure Movies</h3>
                          </>
                        )
                        }
                        { group ===  'Animation' && (
                          <>
                            <h1>Animation</h1>
                            <h3>Animation Movies</h3>
                          </>
                        )
                        }
                        { group ===  'Comedy' && (
                          <>
                            <h1>Comedy</h1>
                            <h3>Comedy Movies</h3>
                          </>
                        )
                        }
                        { group ===  'Crime' && (
                          <>
                            <h1>Crime</h1>
                            <h3>Crime Movies</h3>
                          </>
                        )
                        }
                        { group ===  'Documentary' && (
                          <>
                            <h1>Documentary</h1>
                            <h3>Documentary Movies</h3>
                          </>
                        )
                        }
                        { group ===  'Drama' && (
                          <>
                            <h1>Drama</h1>
                            <h3>Drama Movies</h3>
                          </>
                        )
                        }
                        { group ===  'Family' && (
                          <>
                            <h1>Family</h1>
                            <h3>Family Movies</h3>
                          </>
                        )
                        }
                        { group ===  'Fantasy' && (
                          <>
                            <h1>Fantasy</h1>
                            <h3>Fantasy Movies</h3>
                          </>
                        )
                        }
                        { group ===  'History' && (
                          <>
                            <h1>History</h1>
                            <h3>History Movies</h3>
                          </>
                        )
                        }
                        { group ===  'Horror' && (
                          <>
                            <h1>Horror</h1>
                            <h3>Horror Movies</h3>
                          </>
                        )
                        }
                        { group ===  'Music' && (
                          <>
                            <h1>Music</h1>
                            <h3>Music Movies</h3>
                          </>
                        )
                        }
                        { group ===  'Mistery' && (
                          <>
                            <h1>Mistery</h1>
                            <h3>Mistery Movies</h3>
                          </>
                        )
                        }
                        { group ===  'Romance' && (
                          <>
                            <h1>Romance</h1>
                            <h3>Romance Movies</h3>
                          </>
                        )
                        }
                        { group ===  'ScienceFiction' && (
                          <>
                            <h1>Science Fiction</h1>
                            <h3>Science Fiction Movies</h3>
                          </>
                        )
                        }
                        { group ===  'Thiriller' && (
                          <>
                            <h1>Thiriller</h1>
                            <h3>Thiriller Movies</h3>
                          </>
                        )
                        }
                        { group ===  'TvMovie' && (
                          <>
                            <h1>Tv Movie</h1>
                            <h3>Tv Movie Films</h3>
                          </>
                        )
                        }
                           { group ===  'War' && (
                          <>
                            <h1>War</h1>
                            <h3>War Movies</h3>
                          </>
                        )
                        }
                           { group ===  'Western' && (
                          <>
                            <h1>Western</h1>
                            <h3>Western Movies</h3>
                          </>
                        )
                        }
                             { group ===  'search' && (
                          <>
                            <h1>Search</h1>
                            <h3>You Search</h3>
                          </>
                        )
                        }
              

                    </TitleDiv>
                    { group ===  'trending' && (
                      <MoviesDiv>
                      {popularMovies.map(({results})=>
                                  {
                                      return results.map((movies,index)=>
                                      {
                                          return(
                                                  <CardItem key={movies.id} movies={movies}></CardItem>
                                              )
                                          }
                                  )})}
  
                        
                      </MoviesDiv>
                        )
                        }
                         { group ===  'search' && (
                      <MoviesDiv>
                      {search?.map(({results})=>
                                  {
                                      return results.map((movies,index)=>
                                      {
                                          return(
                                                  <CardItem key={movies.id} movies={movies}></CardItem>
                                              )
                                          }
                                  )})}
  
                        
                      </MoviesDiv>
                        )
                        }


                      { group ===  'top' && (

                        <MoviesDiv>
                        {ratedPages.map(({results})=>
                                    {
                                        return results.map((movies,index)=>
                                        {
                                            return(
                                                    <CardItem key={movies.id} movies={movies}></CardItem>
                                                )
                                            }
                                    )})}
    
                          
                        </MoviesDiv>
                        ) 
                        }
                      { group == 'netflix' && (
                          <MoviesDiv>
                            {
                              filmes.map((results) =>
                              {
                                return(
                                        <CardItem key={results.id} movies={results}></CardItem>
                                )
                                      
                              }
                            )}
                          </MoviesDiv>
                      
                      )}
                      { group == 'prime' && (
                        <MoviesDiv>
                          {
                            filmes.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                      { group == 'hbom' && (
                        <MoviesDiv>
                          {
                            filmes.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                      { group == 'disney' && (
                        <MoviesDiv>
                          {
                            filmes.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                      { group == 'globo' && (
                        <MoviesDiv>
                          {
                            filmes.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                      
                      { group == 'Action' && (
                        
                        <MoviesDiv>

                              {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
 
                        
                        </MoviesDiv>
                      )}
                        { group == 'Adventure' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                        { group == 'Animation' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                        { group == 'Comedy' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                        { group == 'Crime' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                        { group == 'Documentary' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                        { group == 'Drama' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                        { group == 'Family' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                        { group == 'Fantasy' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                        { group == 'History' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                        { group == 'Horror' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                        { group == 'Music' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                        { group == 'Mistery' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                        { group == 'Romance' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                        { group == 'ScienceFiction' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                        { group == 'Thiriller' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                        
                      )}
                      
                        { group == 'TvMovie' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                          
                        
                        </MoviesDiv>
                      )}
                        { group == 'War' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
                        { group == 'Western' && (
                        
                        <MoviesDiv>
                                                    
                          {
                            
                            filmesGenres.map((results)=>
                            {
                               
                              return(
                                      <CardItem key={results.id} movies={results}></CardItem>
                              )
                                    
                            }
                          )}
                        
                        </MoviesDiv>
                      )}
               <ThemeProvider theme={theme}>
                <Button sx = {{margin : "2rem"}} color = "secondary" variant="contained" className="more" onClick={() => {
                      setPage(odlnumber => odlnumber + 1)
                      setPageGenres(odlnumber => odlnumber + 1)
                      SetPopularPerPage(odlnumber => odlnumber + 1)
                      }}>more</Button>
               </ThemeProvider>
                     
                  
                </ContentDiv>
     


                 
             
            </MainDiv>
            
            <Footer/>
            
        </>
    )
}
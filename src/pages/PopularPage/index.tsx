  
import {useEffect,useContext} from "react"
import {popularMovieContext} from "../../context/popularMovieContext"
import { base_ImageUrl } from "../../services/api";
import {GetPopularMovies} from "../../services/apiTMDB"
import { PopularPageStyled } from "./style";
function PopularPage()
{
    const {popularPerPage,popularMovies,setPopularMovies} = useContext(popularMovieContext)
        useEffect(()=>
    {
      async function getPopularMovies() : Promise<void>
      {
        const popularMovie = await GetPopularMovies(popularPerPage)
        setPopularMovies((oldresults)=> 
        {
          if(oldresults.length > 0)
          {
            const newResult = oldresults.filter((results)=>
            {
              if(results.page != popularMovie.page)
              {
                return results
              }
            })
            return newResult.concat(popularMovie)
          }
          else
          {
            return oldresults.concat(popularMovie)
          }
        })
      }
      getPopularMovies()
    },[popularPerPage])

    return(
        <PopularPageStyled>
            {popularMovies && popularMovies.map(({results})=>
            {
            return results.map((movies)=>
            {
                const {poster_path} = movies
        
                return (
                <li key={movies.id}>
                <p style={{fontSize : "5rem"}}>{movies.title}</p>
                <img width={400} height = {400} src = {`${base_ImageUrl}${poster_path}`}></img>
                </li>
                )
            })
            })}
        </PopularPageStyled>
    )
}
export {PopularPage}
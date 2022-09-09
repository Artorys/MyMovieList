import {apiTMDb} from "./api"
import {IGenres, IGenresRes, IOnlyGenre, IRated, IResponsePopularMovie, ISearchResponse,ITrendingRes} from "../interfaces/axiosReponseApiTmdb"
import { useContext } from "react"
async function GetPopularMovies(page : number)
{

    const popularMovies = await apiTMDb.get<IResponsePopularMovie>("/movie/popular",
    {
        params : 
        {
            language : "en",
            region : "BR",
            page : page,           


        }
    })

    return popularMovies.data
}

async  function GetComingSoonMovies(page : number)
{
    const comingSoonMovies = await apiTMDb.get<IResponsePopularMovie>("/movie/upcoming",
    {
        params : 
        {
            language : "en",
            page : page
        }
    })
    return comingSoonMovies.data
}
async function GetRatedMovie( page : number)
{
    const ratedMovies = await apiTMDb.get<IRated>("/movie/top_rated",
    {
        params : 
        {
            language : "en",
            region : "BR",
            page : page
        }
    })
    
    return ratedMovies.data
}
async function GetGenresOfMovies()
{
    const genresOfMovies = await apiTMDb.get<IGenresRes>("/genre/movie/list",
    {
        params : 
        {
            language : "en",
        }
    })
    return genresOfMovies.data.genres
}
async function GetOnlyGenres(name : string,count : number)
{
    switch(name)
    {
        case "Action" :
        const Action = await apiTMDb.get<IOnlyGenre>("discover/movie",
        {
            params : 
            {
                with_genres : "28",
                page : count
            }
        })
        return Action
        case "Adventure":
            const Adventure = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "12",
                    page : count
                }
            })
            return Adventure
        case "Animation" :
            const Animation = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "16",
                    page : count
                }
            })
            return Animation
        case "Comedy" :
            const Comedy = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "35",
                    page : count
                }
            })
            return Comedy
            case "Crime" :
                const Crime = await apiTMDb.get<IOnlyGenre>("discover/movie",
                {
                    params : 
                    {
                        with_genres : "80",
                        page : count
                    }
                })
                return Crime
        case "Documentary" :
            const Documentary = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "99",
                    page : count
                }
            })
            return Documentary
        case "Drama" :
            const Drama = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "18",
                    page : count
                }
            })
            return Drama
        case "Family" :
            const Family = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "10751",
                    page : count
                }
            })
            return Family
        case "Fantasy" :
            const Fantasy = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "14",
                    page : count
                }
            })
            return Fantasy
        case "History" :
            const History = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "36",
                    page : count
                }
            })
            return History
        case "Horror" :
            const Horror = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "27",
                    page : count
                }
            })
            return Horror
        case "Music" :
            const Music = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "10402",
                    page : count
                }
            })
            return Music
        case "Mystery" :
            const Mystery = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "9648",
                    page : count
                }
            })
            return Mystery
        case "Romance" : 
        const Romance = await apiTMDb.get<IOnlyGenre>("discover/movie",
        {
            params : 
            {
                with_genres : "10749",
                page : count
            }
        })
        return Romance
        case "Science Fiction" :
            const Science = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "878",
                    page : count
                }
            })
            return Science
        case "TV Movie" :
            const Tv_Movie = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "10770",
                    page : count
                }
            })
            return Tv_Movie
        case "Thriller" :
            const Thriller = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "53",
                    page : count
                }
            })
            return Thriller
        case "War" :
            const War = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "10752",
                    page : count
                }
            })
            return War
        case "Western" :
            const Western = await apiTMDb.get<IOnlyGenre>("discover/movie",
            {
                params : 
                {
                    with_genres : "37",
                    page : count
                }
            })
            return Western
    }
}
async function SearchMovies(input : string)
{   
    const search = await apiTMDb.get<ISearchResponse>("/search/movie",
    {
        params : 
        {
            query : input
        }
    })
    return search.data
}
async function TrendingMovies()
{   
    const trending = await apiTMDb.get<ITrendingRes>("/movie/top_rated",
    {
        params : 
        {
            watch_region : "BR"
        }
    })
    console.log(trending.data.results)
    return trending.data
}
export {TrendingMovies,SearchMovies,GetPopularMovies,GetComingSoonMovies,GetRatedMovie,GetGenresOfMovies,GetOnlyGenres}
import { createContext, useState,SetStateAction, Dispatch, ReactElement } from "react";
import {IResults,IResponsePopularMovie} from "../interfaces/axiosReponseApiTmdb"

interface IPopularMovieContext
{
    popularPerPage : number,
    SetPopularPerPage : Dispatch<SetStateAction<number>>
    popularMovies : Array<IResponsePopularMovie>
    setPopularMovies : Dispatch<SetStateAction<Array<IResponsePopularMovie>>>
    popularImage : Array<string>
    setPopularImage :  Dispatch<SetStateAction<Array<string>>>
}
interface IPopularMovieProps
{
    children : ReactElement
}

const popularMovieContext = createContext<IPopularMovieContext>({} as IPopularMovieContext)

function PopularMovieProvider({children} : IPopularMovieProps)
{
    const [popularPerPage,SetPopularPerPage] = useState<number>(1)
    const [popularMovies,setPopularMovies] = useState<Array<IResponsePopularMovie>>(Array<IResponsePopularMovie>)
    const [popularImage,setPopularImage] = useState<Array<string>>(Array<string>)
    return(
        <popularMovieContext.Provider value = {{popularPerPage,SetPopularPerPage,popularMovies,setPopularMovies,popularImage,setPopularImage}}>{children}</popularMovieContext.Provider>
    )
}
export {popularMovieContext,PopularMovieProvider}
import { ReactElement,createContext,useState, Dispatch, SetStateAction } from "react";
import { IGenres } from "../interfaces/axiosReponseApiTmdb";

interface IGenreOfMoviesContext
{
    genresOfMovies : Array<IGenres>
    setGenresOfMovies : Dispatch<SetStateAction<Array<IGenres>>>
}
interface GenresOfMoviesProviderProps
{
    children : ReactElement
}
export const GenresOfMoviesContext = createContext<IGenreOfMoviesContext>({} as IGenreOfMoviesContext) 

export function GenresOfMoviesProvider({children} : GenresOfMoviesProviderProps): ReactElement
{
    const [genresOfMovies,setGenresOfMovies] = useState<Array<IGenres>>([])
    return(
        <GenresOfMoviesContext.Provider value = {{genresOfMovies,setGenresOfMovies}}>{children}</GenresOfMoviesContext.Provider>
    )
}
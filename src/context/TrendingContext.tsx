import { ReactElement,createContext,useState, Dispatch, SetStateAction } from "react";
import { IGenres, ITrending, ITrendingRes } from "../interfaces/axiosReponseApiTmdb";

interface ITrendingContext
{
    trending : ITrendingRes
    setTrending : Dispatch<SetStateAction<ITrendingRes>>
}
interface ITrendingProviderProps
{
    children : ReactElement
}
export const TrendingContext= createContext<ITrendingContext>({} as ITrendingContext) 

export function TrendingProvider({children} : ITrendingProviderProps): ReactElement
{
    const [trending,setTrending] = useState<ITrendingRes>({} as ITrendingRes)
    return(
        <TrendingContext.Provider value = {{trending,setTrending}}>{children}</TrendingContext.Provider>
    )
}
import {createContext,Dispatch,SetStateAction,useState} from "react"
import { apiTMDb } from "../services/api"
import {IVideos} from "../interfaces/axiosReponseApiTmdb"
import { ReactElement } from "react"
export interface IPlayContext
{
    play : Array<IPlay>,
    setPlay : Dispatch<SetStateAction<Array<IPlay>>>
}
export interface IPlay
{
    id : string | number
    play : boolean
    url : string
}
export async function getVideo(id : number)
{

    const videoKey = await apiTMDb.get<IVideos>(`/movie/${id}/videos`)
    const videosFiltered = videoKey.data.results.filter((result)=>
    {
        if(result.key && result.type == "Teaser" && result.site == "YouTube")
        {
            return result
        }
        if(result.key && result.type == "Trailer" && result.site == "YouTube")
        {
            return result
        }
    })
    const key = videosFiltered[0]?.key
    const value = `http://www.youtube.com/embed/${key}&enablejsapi=1`
    return value
}
interface IPlayProps
{
    children : ReactElement
}
export const PlayContext = createContext<IPlayContext>({} as IPlayContext)
export function PlayProvider({children} : IPlayProps)
{
    
    const [play,setPlay] = useState<Array<IPlay>>([])
    return(
        <PlayContext.Provider value = {{play,setPlay}}>{children}</PlayContext.Provider>
    )
}
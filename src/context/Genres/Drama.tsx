import { createContext, Dispatch, ReactElement, SetStateAction, useState } from "react"
import { IResultsGenre } from "../../interfaces/axiosReponseApiTmdb"
interface IDramaContext
{
    dramaGenre : Array<IResultsGenre>
    setDramaGenre : Dispatch<SetStateAction<Array<IResultsGenre>>>
    dramaPerPage : number;
    setDramaPerPage : Dispatch<SetStateAction<number>>
}
interface IDramaProps
{
    children : ReactElement
}
const DramaContext = createContext<IDramaContext>({} as IDramaContext)
function DramaProvider({children} : IDramaProps)
{
    const [dramaGenre,setDramaGenre] = useState<Array<IResultsGenre>>([])
    const [dramaPerPage,setDramaPerPage] = useState<number>(1)
    return(
        <DramaContext.Provider value = {{dramaGenre,dramaPerPage,setDramaGenre,setDramaPerPage}}>{children}</DramaContext.Provider>
    )
}
export {DramaContext,DramaProvider}
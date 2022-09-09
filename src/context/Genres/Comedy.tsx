import { createContext, Dispatch, ReactElement, SetStateAction, useState } from "react"
import { IResultsGenre } from "../../interfaces/axiosReponseApiTmdb"
interface IComedyContext
{
    comedyGenre : Array<IResultsGenre>
    setComedyGenre : Dispatch<SetStateAction<Array<IResultsGenre>>>
    comedyPerPage : number;
    setComedyPerPage : Dispatch<SetStateAction<number>>
}
interface IActionProps
{
    children : ReactElement
}
const ComedyContext = createContext<IComedyContext>({} as IComedyContext)
function ComedyProvider({children} : IActionProps)
{
    const [comedyGenre,setComedyGenre] = useState<Array<IResultsGenre>>([])
    const [comedyPerPage, setComedyPerPage] = useState<number>(1)
    return(
        <ComedyContext.Provider value = {{comedyGenre,comedyPerPage,setComedyGenre,setComedyPerPage}}>{children}</ComedyContext.Provider>
    )
}
export {ComedyContext,ComedyProvider}
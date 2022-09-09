import { createContext, Dispatch, ReactElement, SetStateAction, useState } from "react"
import { IResultsGenre } from "../../interfaces/axiosReponseApiTmdb"
interface IAdventureContext
{
    adventureGenre: Array<IResultsGenre>
    setAdventureGenre: Dispatch<SetStateAction<Array<IResultsGenre>>>
    adventurePerPage : number;
    setAdventurePerPage : Dispatch<SetStateAction<number>>
}
interface IActionProps
{
    children : ReactElement
}
const AdventureContext = createContext<IAdventureContext>({} as IAdventureContext)
function AdventureProvider({children} : IActionProps)
{
    const [adventureGenre,setAdventureGenre] = useState<Array<IResultsGenre>>([])
    const [adventurePerPage,setAdventurePerPage] = useState<number>(1)
    return(
        <AdventureContext.Provider value = {{setAdventureGenre,adventureGenre,adventurePerPage,setAdventurePerPage}}>{children}</AdventureContext.Provider>
    )
}
export {AdventureContext,AdventureProvider}
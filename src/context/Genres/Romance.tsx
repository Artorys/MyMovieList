import { createContext, Dispatch, ReactElement, SetStateAction, useState } from "react"
import { IResultsGenre } from "../../interfaces/axiosReponseApiTmdb"
interface IActionContext
{
    actionGenre : Array<IResultsGenre>
    setActionGenre : Dispatch<SetStateAction<Array<IResultsGenre>>>
    actionPerPage : number;
    setActionPerPage : Dispatch<SetStateAction<number>>
}
interface IActionProps
{
    children : ReactElement
}
const ActionContext = createContext<IActionContext>({} as IActionContext)
function ActionProvider({children} : IActionProps)
{
    const [actionGenre,setActionGenre] = useState<Array<IResultsGenre>>([])
    const [actionPerPage,setActionPerPage] = useState<number>(1)
    return(
        <ActionContext.Provider value = {{actionGenre,actionPerPage,setActionGenre,setActionPerPage}}>{children}</ActionContext.Provider>
    )
}
export {ActionContext,ActionProvider}
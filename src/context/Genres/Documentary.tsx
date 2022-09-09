import { createContext, Dispatch, ReactElement, SetStateAction, useState } from "react"
import { IResultsGenre } from "../../interfaces/axiosReponseApiTmdb"
interface IDocumentaryContext
{
    documentaryGenre : Array<IResultsGenre>
    setDocumentaryGenre : Dispatch<SetStateAction<Array<IResultsGenre>>>
    documentaryPerPage : number;
    setDocumentaryPerPage : Dispatch<SetStateAction<number>>
}
interface IActionProps
{
    children : ReactElement
}
const DocumentaryContext = createContext<IDocumentaryContext>({} as IDocumentaryContext)
function DocumentaryProvider({children} : IActionProps)
{
    const [documentaryGenre,setDocumentaryGenre] = useState<Array<IResultsGenre>>([])
    const [documentaryPerPage,setDocumentaryPerPage] = useState<number>(1)
    return(
        <DocumentaryContext.Provider value = {{documentaryGenre,documentaryPerPage,setDocumentaryGenre,setDocumentaryPerPage}}>{children}</DocumentaryContext.Provider>
    )
}
export {DocumentaryContext,DocumentaryProvider}
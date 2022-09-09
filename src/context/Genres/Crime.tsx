import { createContext, Dispatch, ReactElement, SetStateAction, useState } from "react"
import { IResultsGenre } from "../../interfaces/axiosReponseApiTmdb"
interface ICrimeContext
{
    crimeGenre : Array<IResultsGenre>
    setCrimeGenre : Dispatch<SetStateAction<Array<IResultsGenre>>>
    crimePerPage : number;
    setCrimePerPage : Dispatch<SetStateAction<number>>
}
interface IActionProps
{
    children : ReactElement
}
const CrimeContext = createContext<ICrimeContext>({} as ICrimeContext)
function CrimeProvider({children} : IActionProps)
{
    const [crimeGenre,setCrimeGenre] = useState<Array<IResultsGenre>>([])
    const [crimePerPage, setCrimePerPage] = useState<number>(1)
    return(
        <CrimeContext.Provider value = {{crimeGenre,crimePerPage,setCrimeGenre,setCrimePerPage}}>{children}</CrimeContext.Provider>
    )
}
export {CrimeContext,CrimeProvider}
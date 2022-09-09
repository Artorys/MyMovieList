import { ReactElement,createContext, useState, Dispatch, SetStateAction } from "react";
import { IRated } from "../interfaces/axiosReponseApiTmdb";

interface IRatedContext
{
    ratedPages : Array<IRated>
    setRatedPages : Dispatch<SetStateAction<Array<IRated>>>
    ratedPerPage : number
    setRatedPerPage : Dispatch<SetStateAction<number>>
}

const RatedContext = createContext<IRatedContext>({} as IRatedContext)
interface IRatedProps
{
    children : ReactElement
}
function RatedProvider({children} : IRatedProps ) : ReactElement
{
    const [ratedPages,setRatedPages] = useState<Array<IRated>>([])
    const [ratedPerPage,setRatedPerPage] = useState<number>(1)
    return(
        <RatedContext.Provider value={{ratedPages,ratedPerPage,setRatedPages,setRatedPerPage}}>{children}</RatedContext.Provider>
    )
}
export {RatedContext,RatedProvider}
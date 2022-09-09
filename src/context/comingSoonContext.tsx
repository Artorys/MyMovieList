import { createContext, Dispatch, ReactElement, SetStateAction, useState } from "react";
import { IComing } from "../interfaces/axiosReponseApiTmdb";

interface IComingSoonContext
{
    coming : Array<IComing>
    setComing : Dispatch<SetStateAction<Array<IComing>>>
    comingPerPage : number
    setComingPerPage :  SetStateAction<Dispatch<number>>

}
interface IComingProps
{
    children : ReactElement
}
const ComingSoonContext = createContext<IComingSoonContext>({} as IComingSoonContext)


function ComingSoonProvider({children} : IComingProps )  : ReactElement
{
    const [coming,setComing] = useState<Array<IComing>>([])
    const [comingPerPage,setComingPerPage] = useState<number>(1)
    return (
        <ComingSoonContext.Provider value = {{coming,setComing,comingPerPage,setComingPerPage}}>{children}</ComingSoonContext.Provider>
    )
}
export {ComingSoonContext,ComingSoonProvider}
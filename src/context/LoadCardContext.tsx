import { createContext, Dispatch, ReactElement, SetStateAction, useState } from "react";
import { IComing } from "../interfaces/axiosReponseApiTmdb";

interface ILoadCardContext
{
    loading : boolean;
    setLoading : Dispatch<SetStateAction<boolean>>

}
interface ILoadCardProps
{
    children : ReactElement
}
const LoadingCardContext = createContext<ILoadCardContext>({} as ILoadCardContext)


function LoadingCardProvider({children} : ILoadCardProps )  : ReactElement
{
    const [loading,setLoading] = useState<boolean>(true)
    return (
        <LoadingCardContext.Provider value = {{loading,setLoading}}>{children}</LoadingCardContext.Provider>
    )
}
export {LoadingCardContext,LoadingCardProvider}
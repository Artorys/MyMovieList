import { createContext, Dispatch, ReactElement, SetStateAction, useState } from "react"
import { IResultsGenre } from "../../interfaces/axiosReponseApiTmdb"
interface IAnimationContext
{
    animationGenre : Array<IResultsGenre>
    setAnimationGenre : Dispatch<SetStateAction<Array<IResultsGenre>>>
    animationPerPage : number;
    setAnimationPerPage : Dispatch<SetStateAction<number>>
}
interface IActionProps
{
    children : ReactElement
}
const AnimationContext = createContext<IAnimationContext>({} as IAnimationContext)
function AnimationProvider({children} : IActionProps)
{
    const [animationGenre,setAnimationGenre] = useState<Array<IResultsGenre>>([])
    const [animationPerPage,setAnimationPerPage] = useState<number>(1)
    return(
        <AnimationContext.Provider value = {{animationGenre,animationPerPage,setAnimationGenre,setAnimationPerPage}}>{children}</AnimationContext.Provider>
    )
}
export {AnimationContext,AnimationProvider}
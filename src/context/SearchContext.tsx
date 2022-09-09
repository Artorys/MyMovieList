import { ReactElement,createContext,useState, Dispatch, SetStateAction } from "react";
import { Search } from "react-router-dom";
import { ISearchResponse } from "../interfaces/axiosReponseApiTmdb";

interface ISearchContext
{
    search : Array<ISearchResponse>;
    setSearch : Dispatch<SetStateAction<Array<ISearchResponse>>>;
    searchPerPage : number;
    setSearchPerPage : Dispatch<SetStateAction<number>>

}
interface ISearchProps
{
    children : ReactElement
}
const SearchContext = createContext<ISearchContext>({} as ISearchContext)

function SearchProvider({children} : ISearchProps) : ReactElement
{
    const [search,setSearch] = useState<Array<ISearchResponse>>([])
    const [searchPerPage,setSearchPerPage] = useState<number>(1)
    return(
        <SearchContext.Provider value={{search,setSearch,searchPerPage,setSearchPerPage,}}>{children}</SearchContext.Provider>
    )
}
export {SearchProvider,SearchContext}
import { ReactElement } from "react";
import {PopularMovieProvider} from "./popularMovieContext"
import {AuthProvider} from "./authContext"
import {ComingSoonProvider} from "./comingSoonContext"
import {RatedProvider} from "./ratedContext"
import { PlayProvider } from "./playContext";
import { GenresOfMoviesProvider } from "./GenresOfMoviesContext";
import { SearchProvider } from "./SearchContext";
import { StremerComponent } from "./stremerPlataform";
import { GenresComponent } from "./GenresContext";

interface IContextProps
{
    children : ReactElement
}

function Provider({children} : IContextProps) : ReactElement
{
    return(
        <AuthProvider>
            <PopularMovieProvider>
                <ComingSoonProvider>
                    <RatedProvider>
                            <PlayProvider>
                                <GenresOfMoviesProvider>
                                    <StremerComponent>
                                    <GenresComponent>
                                        <SearchProvider>
                                            {children}
                                        </SearchProvider>
                                    </GenresComponent>
                                    </StremerComponent>
                                </GenresOfMoviesProvider>
                            </PlayProvider>
                    </RatedProvider>
                </ComingSoonProvider>
            </PopularMovieProvider>
        </AuthProvider>
    )
}
export {Provider}
import { createContext, ReactNode, useEffect, useState } from "react";
import { IReponsePlataformStremer } from "../interfaces/axiosReponseApiTmdb";
import {
  filmesPlataform,
  IcontextGenres,
} from "../interfaces/plataforma/plataformaStremer";
import { apiTMDb } from "../services/api";

interface IGenresContext {
  children: ReactNode;
}

export const genresContext = createContext<IcontextGenres>(
  {} as IcontextGenres
);

export function GenresComponent({ children }: IGenresContext) {
  const [filmesGenres, setFilmesGenres] = useState<filmesPlataform[]>(
    [] as filmesPlataform[]
  );
  const [genres, setGenres] = useState(0);

  const [pageGenres, setPageGenres] = useState(1);

  useEffect(() => {
    

    apiTMDb
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=5c3399653ec5331dea8245d00cfda8d4&with_genres=${genres}&watch_region=BR`,
        {
          params: {
            page: pageGenres,
          },
        }
      )
      .then((res: IReponsePlataformStremer) => {
        res.data.results.map((elem) => {
          !filmesGenres.find((elemFilme) => {
            return elemFilme.id == elem.id;
          }) && setFilmesGenres((oldFilme) => [...oldFilme, elem]);
        });
      });
  }, [pageGenres, genres]);


  return (
    <genresContext.Provider
      value={{
        filmesGenres,
        setPageGenres,
        setGenres,
        setFilmesGenres, genres, pageGenres
      }}
    >
      {children}
    </genresContext.Provider>
  );
}

import { createContext, ReactNode, useEffect, useState } from "react";
import { IReponsePlataformStremer } from "../interfaces/axiosReponseApiTmdb";
import {
  filmesPlataform,
  IcontextPlataforma,
} from "../interfaces/plataforma/plataformaStremer";
import { apiTMDb } from "../services/api";

interface IStremerContext {
  children: ReactNode;
}

export const stremerContext = createContext<IcontextPlataforma>(
  {} as IcontextPlataforma
);

export function StremerComponent({ children }: IStremerContext) {
  const [filmes, setFilmes] = useState<filmesPlataform[]>(
    [] as filmesPlataform[]
  );
  const [plataform, setPlataforma] = useState(0);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if(plataform === 0)return

    apiTMDb
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=5c3399653ec5331dea8245d00cfda8d4&with_watch_providers=${plataform}&watch_region=BR`,
        {
          params: {
            page: page,
          },
        }
      )
      .then((res: IReponsePlataformStremer) => {
        res.data.results.map((elem) => {
          !filmes.find((elemFilme) => {
            return elemFilme.id == elem.id;
          }) && setFilmes((oldFilme) => [...oldFilme, elem]);
        });
      });
  }, [page, plataform]);


  return (
    <stremerContext.Provider
      value={{
        filmes,
        setPage,
        setPlataforma,
        setFilmes, plataform, page
      }}
    >
      {children}
    </stremerContext.Provider>
  );
}

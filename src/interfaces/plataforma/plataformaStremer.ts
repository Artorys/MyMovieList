import { Dispatch, SetStateAction } from "react";

export interface filmesPlataform {
  img: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  url: string | Promise<string>;
}

export interface IcontextPlataforma {
  setPage: Dispatch<SetStateAction<number>>;
  setPlataforma: Dispatch<SetStateAction<number>>;
  plataform: number;
  page: number;
  setFilmes: Dispatch<SetStateAction<filmesPlataform[]>>;
  filmes: filmesPlataform[];
}


export interface IcontextGenres {
  setPageGenres: Dispatch<SetStateAction<number>>;
  setGenres: Dispatch<SetStateAction<number>>;
  genres: number;
  pageGenres: number;
  setFilmesGenres: Dispatch<SetStateAction<filmesPlataform[]>>;
  filmesGenres: filmesPlataform[];
}

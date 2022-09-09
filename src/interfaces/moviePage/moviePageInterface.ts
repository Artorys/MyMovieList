import { ReactElement, Dispatch, SetStateAction } from "react";
import {
  IReponseCredits,
  IReponseSimilarMovie,
  IResponseDetailMovie,
} from "../axiosReponseApiTmdb";

export interface IMovieContextProps {
  children: ReactElement;
}

export interface IMovieContext {
  movie: IResponseDetailMovie;
  movieSimilar: IReponseSimilarMovie;
  movieCredits: IReponseCredits;
  setMovie_Id: Dispatch<SetStateAction<number>>;
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>, data: string) => void;
  handleSubmitRating: (data: number) => void;
  postLive: Array<IDataComenter>;
  movie_id: number;
  loadingMovie: boolean;
  ratingValue: number;
  setRatingValue: Dispatch<SetStateAction<number>>;
  video: string;
  director: IDirector[]
}

export interface IDataComenter {
  id?: number;
  id_Movie: number;
  userId: number;
  comments: string;
  avatar?: string;
  name?: string
}

export interface IDataRating {
  id?: number;
  id_Movie: number;
  userId: number;
  rating: number;
  avatar?: string;
  name?: string;
}

export interface IDataRatingAll {
    id?: number;
    id_Movie: number;
    userId: number;
    rating: number;
    avatar?: string;
    name?: string
}

export interface IDirector {
    adult: boolean;
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string | null;
}



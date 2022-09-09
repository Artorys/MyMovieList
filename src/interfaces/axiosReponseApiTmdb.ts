import { number } from "yup";
import { string } from "yup/lib/locale";
export interface ITrending
{
  img : string
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
  vote_count: number
}
export interface ITrendingRes
{
  page : number;
  results: Array<ITrending>;
  total_pages: number;
  total_results: number;
}
interface ISearch
{
  img : string
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
  vote_count: number
  string : string | Promise<string>
}
export interface ISearchResponse
{
  page : number;
  results  : Array<ISearch>;
  total_pages: number;
  total_results: number;

}
export interface IResultsGenre
{
  img : string
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
  vote_count: number
}
export interface IOnlyGenre
{
  page: number;
  results: Array<IResultsGenre>;
  total_pages: number;
  total_results: number;
}
export interface IGenres
{
  id : number;
  name : string;
}
export interface IGenresRes
{
  genres : Array<IGenres>
}
export interface IVideos
{
  id : number;
  results :
  [{
    iso_639_1 : string
    iso_3166_1 : string
    name : string;
    key : string;
    site : string;
    size : number;
    type : string;
    official : boolean;
    published_at : string;
    id : string;
  }]
}
export interface IRated
{
    page: number;
    results: Array<IResults>;
    total_pages: number;
    total_results: number;
}
export interface IComing
{
    img : string
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
    vote_count: number
}
export interface IResults
{
    img : string
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
    url? : string | Promise<string>
}

export interface IResponsePopularMovie{
    page: number;
    results: Array<IResults>;
    total_pages: number;
    total_results: number;
}

export interface IResponseDetailMovie{
    data: {
        adult: boolean;
        backdrop_path: string;
        belongs_to_collection: {
          backdrop_path: string;
          id: number;
          name: string;
          poster_path: string;
        };
        budget: number;
        genres: [
          {
            id: number;
            name: string;
          }
        ];
        homepage: string;
        id: string;
        imdb_id: string;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        production_companies: [
          {
            id: number;
            logo_path: string;
            name: string;
            origin_country: string;
          }
        ];
        production_countries: [
          {
            iso_3166_1?: string;
            name: string;
          }
        ];
        release_date: string;
        revenue: number;
        runtime: number;
        spoken_languages: [
          {
            english_name: string;
            iso_639_1: string;
            name: string;
          }
        ];
        status: string;
        tagline: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      };
}

export interface IResponseTopRated{
    page: number;
    results: [{
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
    }];
    total_pages: number;
    total_results: number;
}
interface ICountryInfo
{
    display_priority : number
    logo_path : string
    provider_id : number
    provider_name : string
}

interface IResponseCountry
{
    link : string;
    flatrate? : Array<ICountryInfo>
    rent? : Array<ICountryInfo>
    buy? : Array<ICountryInfo>

}

interface IResponseProviderResult
{
AR? : IResponseCountry
AU? : IResponseCountry
BR? : IResponseCountry
CA? : IResponseCountry
CH? : IResponseCountry
CL? : IResponseCountry
CO? : IResponseCountry
CZ? : IResponseCountry
DE? : IResponseCountry
DK? : IResponseCountry
EC? : IResponseCountry
EE? : IResponseCountry
ES? : IResponseCountry
FI? : IResponseCountry
FR? : IResponseCountry
GB? : IResponseCountry
GR? : IResponseCountry
ID? : IResponseCountry
IN? : IResponseCountry
IT? : IResponseCountry
JP? : IResponseCountry
KR? : IResponseCountry
LT? : IResponseCountry
LV? : IResponseCountry
MX? : IResponseCountry
MY? : IResponseCountry
NL? : IResponseCountry
NO? : IResponseCountry
NZ? : IResponseCountry
PE? : IResponseCountry
PH? : IResponseCountry
PL? : IResponseCountry
PT? : IResponseCountry
RO? : IResponseCountry
RU? : IResponseCountry
SE? : IResponseCountry
SG? : IResponseCountry
TH? : IResponseCountry
TR? : IResponseCountry
US? : IResponseCountry
VE? : IResponseCountry
ZA? : IResponseCountry
}

export interface IResponseProvidersMovie
{
    id : number;
    results : IResponseProviderResult
}

export interface IReponseCredits {
  data:
  {
    id: number
    cast: [{
      adult: boolean;
      cast_id: number;
      character: string;
      credit_id: string;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      order: number;
      original_name: string;
      popularity: number;
      profile_path?: string | null
    }];
    crew: [{
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
    }]
  }
  
}

export interface IReponseSimilarMovie{
  page: number;
  results: [{
    img: string
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
    vote_count: number
    url : string | Promise<string>
  }];
  total_pages: number;
  total_results: number
}


export interface IReponsePlataformStremer{
  data: {
    page: number;
    results: [{
      img: string
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
      vote_count: number
      url : string | Promise<string>
    }];
    total_pages: number;
    total_results: number
  }
  
}
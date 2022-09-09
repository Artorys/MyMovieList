import axios from "axios";

export const apiTMDb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
})
export const apiFake = axios.create({
    baseURL: 'https://imovielist.herokuapp.com'
})
apiTMDb.defaults.params = 
{
    api_key : "5c3399653ec5331dea8245d00cfda8d4"
}
export const base_ImageUrl = "https://image.tmdb.org/t/p/original"

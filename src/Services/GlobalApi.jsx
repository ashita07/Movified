import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key="a6fa89ad74ecb545c5ad283ac8d4b2c6"

const getTrendingVideos=axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`)

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=a6fa89ad74ecb545c5ad283ac8d4b2c6';

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf


const getMoviesByGenreId=(id)=>{axios.get(movieByGenreBaseURL+"&with_genres"+id)}
export default{
    getTrendingVideos,
    getMoviesByGenreId
}
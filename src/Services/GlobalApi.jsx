import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key="a6fa89ad74ecb545c5ad283ac8d4b2c6"

const getTrendingVideos=axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`)

export default{
    getTrendingVideos
}
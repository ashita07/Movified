import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';

function MovieList({genreId}) {
    const [movieList,setMovieList]=useState([]);
   
    useEffect(()=>{
    getMoviesByGenreId();
    },[genreId])

    const getMoviesByGenreId=async ()=>{
     GlobalApi.getMoviesByGenreId(genreId).then(resp=>(
   // console.log(resp.data.results)
    setMovieList(resp.data.results)
))
    }

  return (
    <div className='flex overflow-x-auto scrollbar-hide pt-4 pb-4 px-3 gap-6'>
      {movieList.map((item,index)=>(
        <MovieCard key={index} movie={item}/>
      ))}
    </div>
  )
}

export default MovieList

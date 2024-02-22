import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"


function MovieCard({movie}) {
  return (
    <>
      <img src={IMAGE_BASE_URL+movie.poster_path} className='w-[110px] md:w-[180px] rounded-lg hover:border-[2px] border-white-700 hover:scale-110 cursor-pointer transition-all duration-200 ease-in '/>
    </>
  )
}

export default MovieCard

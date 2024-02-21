import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
function Sliders() {
    const [movieList,setMovieList]=useState([])
    useEffect(()=>{
getTrendingVideos();
    },[])

    const getTrendingVideos=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
           console.log(resp.data.results);
           setMovieList(resp.data.results)
        })
    }
  return (
    <div className='flex overflow-x-auto px-5 py-4 scrollbar-hide'>
      {movieList.map((item,index)=>(
         <img src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md'/>
      ))}
    </div>
  )
}

export default Sliders

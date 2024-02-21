import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const screenWidth=window.innerWidth;

function Sliders() {
    const [movieList,setMovieList]=useState([])
   const elementRef = useRef();
   
    useEffect(()=>{
getTrendingVideos();
    },[])

    const getTrendingVideos=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
           console.log(resp.data.results);
           setMovieList(resp.data.results)
        })
    }

    const sliderRight=(element)=>{
      element.scrollLeft+=innerWidth-23
    }
    const sliderLeft=(element)=>{
      element.scrollLeft-=innerWidth-23
    }

  return (
    <div>
      
        <MdKeyboardArrowLeft className='hidden md:block text-white text-[30px] absolute cursor-pointer mx-1 mt-[150px]' onClick={()=>sliderLeft(elementRef.current)}></MdKeyboardArrowLeft>
        <MdKeyboardArrowRight className='hidden md:block text-white text-[30px] absolute cursor-pointer mx-5 mt-[150px] right-0' onClick={()=>{sliderRight(elementRef.current)}
        }></MdKeyboardArrowRight>
     
    <div className='flex overflow-x-auto px-8 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
      {movieList.map((item,index)=>(
         <img src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-10 rounded-md hover:border-[3px] border-white-400 transition-all duration-100 ease-in'/>
      ))}
    </div>
    </div>
  )
}

export default Sliders

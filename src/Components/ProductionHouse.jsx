import React, { PureComponent } from 'react'
import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nationalG from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwar from './../assets/images/starwar.png'
 
import starwarV from './../assets/Videos/star-wars.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'

function ProductionHouse() {

    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:starwar,
            video:starwarV
        },
        {
            id:4,
            image:marvel,
            video:marvelV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        }
    ]
  return <div className='flex jsutify-between md:gap-4 p-2 px-5 md:px-16'>
{productionHouseList.map((item)=>(
    <div className=' border-[3px] border-gray-600 rounded-lg 
    hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-black'>
     
        <img src={item.image} className='w-full '/>
        
        <video src={item.video} autoPlay loop playsInline className='absolute top-0 rounded-md  opacity-0 hover:opacity-50'/>
    </div>
))}
  </div>
}

export default ProductionHouse

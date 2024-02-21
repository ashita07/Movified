import React, { useState } from 'react'
import disneyLogo from "../assets/images/disneyLogo.png"
import {HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv} from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
//import {HeaderItem} from './HeaderItem';
 function Header(){
    const [toggle,setToggle]=useState(false);
    const Symbols=[
        {   id:1,
            name:'HOME',
            icon: <HiHome></HiHome>
        },
        {   id:2,
            name:'SEARCH',
            icon:<HiMagnifyingGlass></HiMagnifyingGlass>
        },
        {   id:3,
            name:'WATCH LIST',
            icon: <HiPlus></HiPlus>
        },
        {   id:4,
            name:'ORIGINALS',
            icon: <HiStar></HiStar>
        },
        {   id:5,
            name:'MOVIES',
            icon: <HiPlayCircle></HiPlayCircle>
        },
        {   id:6,
            name:'SERIES',
            icon: <HiTv></HiTv>
        }
    ]

  return (
    <div className='flex justify-between p-[8px] items-center'>
      <div className='flex items-center gap-8 md:gap-6 items-center '> 
      <img src={disneyLogo} className='w-[80px] '/>

      <div className='hidden md:flex gap-8'>
      {Symbols.map((item)=>(
        <HeaderItem name={item.name} icon={item.icon}/>
      ))}
      </div>

       <div className='flex md:hidden gap-16'>
      {Symbols.map((item,index)=>index<3&&(
        <HeaderItem name={''} icon={item.icon}/>
      ))}
      <div className='md:hidden'>
      <HeaderItem name={''} icon={<HiDotsVertical onClick={()=>setToggle(!toggle)}/>}/>
     {toggle?
      <div className='absolute mt-3 border-[2px] p-3 bg-transparent border-gray-600 px-5'>
      {Symbols.map((item,index)=>index>2&&(
        <HeaderItem name={item.name} icon={item.icon}/>
      ))}
      </div>:null}
      </div>
      </div>
</div>
<img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='w-[43px]' />

    
      </div>
  )
}

export default Header

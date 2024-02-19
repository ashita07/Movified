import React from 'react'
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
    const Symbols=[
        {   key:"1",
            name:'HOME',
            icon: <HiHome></HiHome>
        },
        {   key:"2",
            name:'SEARCH',
            icon:<HiMagnifyingGlass></HiMagnifyingGlass>
        },
        {   key:"3",
            name:'WATCH LIST',
            icon: <HiPlus></HiPlus>
        },
        {   key:"4",
            name:'ORIGINALS',
            icon: <HiStar></HiStar>
        },
        {   key:"5",
            name:'MOVIES',
            icon: <HiPlayCircle></HiPlayCircle>
        },
        {   key:"6",
            name:'SERIES',
            icon: <HiTv></HiTv>
        }
    ]

  return (
    <div className='flex justify-between p-[8px] items-center'>
      <div className='flex items-center gap-8 md:gap-6 items-center '> 
      <img src={disneyLogo} className='w-[80px] '/>
      {Symbols.map((item)=>(
        <HeaderItem name={item.name} icon={item.icon}/>
      ))}
</div>
<img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='w-[43px]' />

    
      </div>
  )
}

export default Header

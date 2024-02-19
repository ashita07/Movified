import React from 'react'

  function HeaderItem(props) {
  return (
    <div className='flex items-center gap-3 text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3'>
      {props.icon}
    <h2 className=''>   {props.name}</h2>
    </div>
  )
}

export default HeaderItem

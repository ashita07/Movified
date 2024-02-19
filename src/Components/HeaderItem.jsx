import React from 'react'

  function HeaderItem(props) {
  return (
    <div className='flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8'>
      {props.icon}
      {props.name}
    </div>
  )
}

export default HeaderItem

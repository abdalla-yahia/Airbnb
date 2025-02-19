'use client'
import * as icon from '@/Utalites/Icons/icons'
import { useState } from 'react'
export default function Display_Total() {
  const [Toggle, setToggle] = useState(false)
  return (
    <div onClick={() => setToggle(!Toggle)} style={{ borderWidth: '1px' }} className="hidden sm:flex w-[35%] md:w-[25%] lg:w-[20%] rounded-xl justify-between gap-2 items-center p-3 hover:bg-[#f2f2f2] hover:border-2 cursor-pointer border-gray-300  ">
      <p className='text-[0.65rem] text-nowrap font-bold line-clamp-1'>Display total before taxes</p>
      <div className={`${Toggle ? 'bg-gray-500' : 'bg-black'}  relative w-[50px] rounded-[30px] h-5`}>
        <div style={{ transition: 'all 0.5s' }} className={`${Toggle ? 'left-0' : 'left-[60%]'} border-[1px] border-gray-700 w-5 h-5 absolute flex justify-center items-center top-0  rounded-full bg-white`}>
          {!Toggle && <icon.GrCheckmark className='text-black text-[10px]' />}
        </div>
      </div>
    </div>
  )
}

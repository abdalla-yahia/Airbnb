'use client'
import * as icon from '@/Utalites/Icons/icons'
import { useState } from 'react'
export default function Filter() {
    const [Toggle,setToggle]= useState(false)
  return (
    <div  onClick={()=>setToggle(!Toggle)} style={{borderWidth:'1px'}} className="hidden sm:flex w-[15%] md:w-[15%] lg:w-[10%] gap-1 rounded-xl justify-between items-center p-3 hover:bg-[#f2f2f2] hover:border-2 cursor-pointer border-gray-300  ">
          <icon.BiSliderAlt style={{transform:'scale(-1)'}} className='text-black text-[20px]'/>
        <p className='text-[0.65rem] text-nowrap font-bold line-clamp-1'>Filters</p> 
            
    </div>
  )
}

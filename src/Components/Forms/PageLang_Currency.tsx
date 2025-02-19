import * as icon from '@/Utalites/Icons/icons'
import { useState } from 'react'
export default function PageLang_Currency({Language_Curency}:{Language_Curency:boolean}) {
    const [Toggle,setToggle]= useState(false)
    
  return (
    <section className="px-3 py-2 overflow-y-scroll h-[350px]">
    {/**Languages */}
    {Language_Curency && <div className={` flex flex-col gap-5 justify-start items-start`}>
        {/**Auto Change Language  Box */}
        <div className=' p-4 bg-slate-100 mt-5 rounded-md'>
            <div className="text-md gap-1 font-bold flex justify-between items-center ">
                <h2 className="text-lg gap-1 font-bold flex justify-start items-center ">Translation
                <icon.BsTranslate />
                </h2>
                <div onClick={()=>setToggle(!Toggle)} className={` bg-gray-500 hover:bg-black relative w-[50px] rounded-[30px] h-5`}>
                    <div style={{transition:'all 0.5s'}} className={`${Toggle ? 'left-0':'left-[30px]'} border-[1px] border-gray-700 w-5 h-5 absolute flex justify-center items-center top-0  rounded-full bg-white`}>
                    </div>
                </div>
            </div>
            <p className='text-gray-400'>Automatically translate descriptions and reviews to English.</p>
        </div>
        {/**Current Language */}
        <div className='flex flex-col gap-3 my-4'>
            <h2 className='text-lg'>Suggested language and region</h2>
            <h5>
                <span className="text-gray-600 flex flex-col">English 
                   <span className="text-gray-400"> (United States)</span>
                </span>
            </h5>
        </div>
        {/**Choose Languages */}
        <div className="flex flex-col gap-3 my-4 ">
            <h2 className='text-lg'>Choose a language and region</h2>
            <div className="flex flex-wrap justify-between items-start gap-3 my-4">
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">English 
                    <span className="text-gray-400"> United States</span>
                </span>
            </div>
        </div>
    </div>}
    {/**Currency */}
    {!Language_Curency && <div className={` flex flex-col gap-5 justify-start items-start`}>
        {/**Choose Languages */}
        <div className="flex flex-col gap-3 my-4 ">
            <h2 className='text-lg'>Choose a currency</h2>
            <div className="flex flex-wrap justify-between items-start gap-3 my-4">
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">Pound sterling 
                    <span className="text-gray-400"> GBP - &#163;</span>
                </span>
                <span className="text-gray-600 flex flex-col border  p-3 rounded-lg hover:bg-slate-100">United States Dolar 
                    <span className="text-gray-400"> USD - $</span>
                </span>
  
            </div>
        </div>
        </div>
    }
    </section>
  )
}

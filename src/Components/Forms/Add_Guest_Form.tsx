import { AddGuestFormProps } from '@/Interface/interface';
import * as icon from '@/Utalites/Icons/icons';
import React from 'react';



export default function Add_Guest_Form({Adults, setAdults,Children, setChildren,Infants, setInfants,Pets, setPets, Stay_Experience}: AddGuestFormProps

) {


  return (
    <div className="Add_Guest_Form select-none flex flex-col absolute w-full  top-[120%] z-50 bg-white py-2 left-0 shadow-2xl rounded-2xl">
        {/**Add Adults */}
        <div className="Add_Guest_Form flex justify-between items-center p-2 border-b">
            <div className="Add_Guest_Form  py-1 px-3 ">
                <h3 className="Add_Guest_Form font-extrabold text-[15px]">Adults</h3>
                <h4 className="Add_Guest_Form text-[12px] text-gray-600">Ages 13 or above</h4>
            </div>
            <div className="Add_Guest_Form flex justify-center items-center gap-2">
                <icon.CiCircleMinus onClick={()=>{
                    setAdults(prev=>prev > 0?prev -1:0);
                    if(Children > 0 || Infants > 0 ){
                        if(Adults === 1){
                            setAdults(1);
                        }
                    }
                }} className={`${Adults <= 0 ? 'text-gray-200 cursor-not-allowed':'text-gray-600 cursor-pointer'} Add_Guest_Form text-xl`}/>
                <h4 className="Add_Guest_Form text-gray-600 select-none text-xl">{Adults}</h4>
                <icon.CiCirclePlus onClick={()=>setAdults(prev =>(Children + Adults) < 16? prev + 1 : prev)} className={`${(Adults+Children) >= 16 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-600 cursor-pointer'} Add_Guest_Form  text-xl`}/>
            </div>
        </div>
        {/**Children */}
        <div className="Add_Guest_Form flex justify-between items-center p-2 border-b">
            <div className="Add_Guest_Form  py-1 px-3 ">
                <h3 className="Add_Guest_Form font-extrabold text-[15px]">Children</h3>
                <h4 className="Add_Guest_Form text-[12px] text-gray-600">Ages 2 – 12</h4>
            </div>
            <div className="Add_Guest_Form flex justify-center items-center gap-2">
                <icon.CiCircleMinus onClick={()=>setChildren(prev=>prev > 0? prev -1:0)} className={`${Children <= 0 ? 'text-gray-200 cursor-not-allowed':'text-gray-600 cursor-pointer'} Add_Guest_Form  text-xl`}/>
                <h4 className="Add_Guest_Form text-gray-600 select-none text-xl">{Children}</h4>
                <icon.CiCirclePlus onClick={()=>{
                    setChildren(prev =>(Children + Adults ) < 16? prev + 1 : prev);
                    if (Adults === 0) {
                        setAdults(1);
                    }
                }} className={`${(Adults+Children) >= 16 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-600 cursor-pointer'} Add_Guest_Form  text-xl`}/>
            </div>
        </div>
        {/**Infants */}
        <div className="Add_Guest_Form flex justify-between items-center p-2 ">
            <div className="Add_Guest_Form  py-1 px-3 ">
                <h3 className="Add_Guest_Form font-extrabold text-[15px]">Infants</h3>
                <h4 className="Add_Guest_Form text-[12px] text-gray-600">Under 2</h4>
            </div>
            <div className="Add_Guest_Form flex justify-center items-center gap-2">
                <icon.CiCircleMinus onClick={()=>{
                    setInfants(prev=>prev > 0?prev -1:0);
                    }} className={`${Infants <= 0 ? 'text-gray-200 cursor-not-allowed':'text-gray-600 cursor-pointer'} Add_Guest_Form  text-xl`}/>
                <h4 className="Add_Guest_Form text-gray-600 select-none text-xl">{Infants}</h4>
                <icon.CiCirclePlus onClick={()=>{
                    setInfants(prev=>prev < 5 ? prev +1 : prev);
                    if (Adults === 0) {
                        setAdults(1);
                    }
                    }} className={`${Infants >= 5 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-600 cursor-pointer'} Add_Guest_Form text-xl`}/>
            </div>
        </div>
        {/**Pets */}
        {Stay_Experience && <div className="Add_Guest_Form flex justify-between items-center p-2 ">
            <div className="Add_Guest_Form  py-1 px-3 ">
                <h3 className="Add_Guest_Form font-extrabold text-[15px]">Pets</h3>
                <h4 className="Add_Guest_Form text-[12px] text-gray-600 underline">Bringing a service animal?</h4>
            </div>
            <div className="Add_Guest_Form flex justify-center items-center gap-2">
                <icon.CiCircleMinus onClick={()=>{
                    setPets(prev=>prev > 0?prev -1:0);
                    }} className={`${Pets <= 0 ? 'text-gray-200 cursor-not-allowed':'text-gray-600 cursor-pointer'} Add_Guest_Form  text-xl`}/>
                <h4 className="Add_Guest_Form text-gray-600 select-none text-xl">{Pets}</h4>
                <icon.CiCirclePlus onClick={()=>{
                    setPets(prev=>prev < 5 ? prev +1 : prev);
                    if (Adults === 0) {
                        setAdults(1);
                    }
                    }} className={`${Pets >= 5 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-600 cursor-pointer'} Add_Guest_Form text-xl`}/>
            </div>
        </div>}
    </div>
  )
}

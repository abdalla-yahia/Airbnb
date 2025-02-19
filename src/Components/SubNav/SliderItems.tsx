'use client'
import * as Icons from '@/Utalites/Icons/icons'
import './Subnav_Style.css';
import React from 'react';
import { useEffect } from 'react';
import Icons_Slid from './Icons_Slid.json';
export default function SliderItems() {
    useEffect(() => {
        const parent_item = document.querySelectorAll('.parent_item');
        parent_item.forEach((item) => {
            item.addEventListener('click', () => {
                parent_item.forEach((elemnt) => {
                    elemnt.classList.remove('active_subnav');
                });
                item.classList.add('active_subnav');
            });
        });
    }, [])
    return (
        <div className="flex flex-nowrap justify-between items-start gap-4 w-full text-gray-400">
            {
                Icons_Slid.map((icons, index) => {
                    return <div key={index} className='parent_item w-fit mx-4 flex flex-col justify-center items-center text-gray-400 hover:border-b-2 hover:text-black cursor-pointer border-slate-500'>
                        {React.createElement(Icons[icons.icon as keyof typeof Icons], { className: 'text-2xl text-inherit  hover:text-inherit' })}
                        <p className='text-[10px] font-semibold text-inherit hover:text-inherit text-center  line-clamp-1'>{icons?.name}</p>
                    </div>
                })
            }

        </div>
    )
}

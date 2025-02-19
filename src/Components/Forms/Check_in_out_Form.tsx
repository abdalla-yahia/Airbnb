import { useEffect, useState } from "react"
import './style.css'
import Page_Dates from "./Page_Dates"
import { PageDatesProps } from "@/Interface/interface"
import Page_Months from "./Page_Months"

export default function Check_in_out_Form({ setStartCheckin, DateCheckin, setDateCheckin, DateCheckOut, setDateCheckOut }: PageDatesProps) {
    const [show, setShow] = useState(false)
    useEffect(() => {
        const change_dates = document.querySelectorAll('.change_dates')
        change_dates.forEach((item) => {
            item.addEventListener('click', () => {
                change_dates.forEach((el) => {
                    el.classList.remove('change_dates_active')
                })
                item.classList.add('change_dates_active')
            })
        })
    }, [])
    return (
        <div className=" select-none toggle_dates_time Change_Lang flex flex-col justify-start py-6 items-center absolute h-[450px] top-[110%] left-[50%] w-[100%] translate-x-[-50%] z-50 bg-white shadow-md rounded-lg overflow-scroll scrollbar-hide ">
            <ul className="toggle_dates_time flex justify-start items-start w-[50%] rounded-[30px] bg-[#ededed] p-1">
                <li className="toggle_dates_time change_dates change_dates_active p-1 flex justify-center items-center rounded-[30px] w-1/3 hover:bg-[#ddd] cursor-pointer">Dates</li>
                <li className="toggle_dates_time change_dates p-1 flex justify-center items-center rounded-[30px] w-1/3 hover:bg-[#ddd] cursor-pointer">Months</li>
                <li className="toggle_dates_time change_dates p-1 flex justify-center items-center rounded-[30px] w-1/3 hover:bg-[#ddd] cursor-pointer">Flexible</li>
            </ul>
            {show && <Page_Dates setStartCheckin={setStartCheckin} DateCheckin={DateCheckin} setDateCheckin={setDateCheckin} DateCheckOut={DateCheckOut} setDateCheckOut={setDateCheckOut} />}
            <Page_Months />
        </div>
    )
}

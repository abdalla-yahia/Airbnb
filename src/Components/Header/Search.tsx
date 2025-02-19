"use client";
import { useEffect, useState } from "react";
import "./style_Header.css";
import * as icon from "@/Utalites/Icons/icons";
import Add_Guest_Form from "../Forms/Add_Guest_Form";
import Check_in_out_Form from "../Forms/Check_in_out_Form";

export default function Search({ Stay_Experience }: { Stay_Experience: boolean }) {
  const [AddGuestForm, setAddGuestForm] = useState(false)
  const [CheckinoutForm, setCheckinoutForm] = useState(true)
  const [StartCheckin, setStartCheckin] = useState(false)
  const [DateCheckin, setDateCheckin] = useState("")
  const [DateCheckOut, setDateCheckOut] = useState("")
  const [Adults, setAdults] = useState(0);
  const [Children, setChildren] = useState(0);
  const [Infants, setInfants] = useState(0);
  const [Pets, setPets] = useState(0);
  //Add Class Active On Element When Scroll items bar
  useEffect(() => {
    const doc = document.querySelectorAll(".where");
    const search_parent = document.querySelector(".search_parent");
    doc.forEach((item) => {
      item.addEventListener("click", () => {
        search_parent?.classList.add("no-active");
        doc.forEach((el) => {
          el.classList.remove("active");
          el.classList.add("no-active");
        });
        item.classList.add("active");
        item.classList.remove("no-active");
      });
    });
    document.documentElement.addEventListener('click', (el) => {
      if (!(el?.target as HTMLElement)?.classList.contains('Add_Guest_Form')) {
        setAddGuestForm(false)
      }
    })
  }, []);

  useEffect(() => {
    const doc = document.querySelectorAll(".where");
    doc[1].addEventListener('click', () => {
      // setStartCheckin(false)
      setDateCheckin('')
      setDateCheckOut('')
    })
    if (DateCheckin) {
      doc[1].classList.remove('active')
      doc[2].classList.add('active')
    }
  }, [DateCheckin])

  document.documentElement.addEventListener('click', (el) => {
    if (!(el.target as HTMLElement).classList.contains('toggle_dates_time')) {
      setCheckinoutForm(false)
    }
  })
  return (
    <div
      style={{ transition: ".5s" }}
      className={`
          search_parent w-full flex relative rounded-[30px]  outline-none border  shadow-lg shadow-[#ebebeb] `}
    >
      {/**Where */}
      <div
        className={`where flex flex-col w-1/4 p-3 pl-8 cursor-pointer justify-start`}
      >
        <p className="text-[14px] font-[400]">Where</p>
        <input
          type="search"
          className=" outline-none  bg-inherit  placholder:text-gray-400"
          placeholder="Search destenation"
        />
      </div>
      {/**Check in */}
      <div onClick={() => setCheckinoutForm(StartCheckin ? true : !CheckinoutForm)}
        className={`${Stay_Experience ? 'w-1/3' : 'w-1/4'} where  flex flex-col  p-3 cursor-pointer justify-start px-4`}
      >
        <p className="text-[14px] font-[400]">{Stay_Experience ? 'Check in' : 'Date'}</p>
        <span className={`${DateCheckin ? 'text-black' : 'text-gray-400'} span_search`}>{DateCheckin || 'Add dates'} </span>
      </div>
      {/**Check Out */}
      <div onClick={() => setCheckinoutForm(StartCheckin ? true : !CheckinoutForm)}
        className={`${Stay_Experience ? 'flex' : 'hidden'} where  flex-col w-1/4 p-3 cursor-pointer justify-start px-4`}
      >
        <p className="text-[14px] font-[400]">Check out</p>
        <span className={`${DateCheckOut ? 'text-black' : 'text-gray-400'} span_search`}>{DateCheckOut || 'Add dates'}</span>
      </div>
      {CheckinoutForm && <Check_in_out_Form setStartCheckin={setStartCheckin} DateCheckin={DateCheckin} setDateCheckin={setDateCheckin} DateCheckOut={DateCheckOut} setDateCheckOut={setDateCheckOut} />}
      {/**Add Guest */}
      <div onClick={() => setAddGuestForm(true)}
        className={`where flex w-full relative cursor-pointer justify-between items-center pl-5 pr-1`}
      >
        {AddGuestForm && <Add_Guest_Form Adults={Adults} setAdults={setAdults} Children={Children} setChildren={setChildren} Infants={Infants} setInfants={setInfants} Pets={Pets} setPets={setPets} Stay_Experience={Stay_Experience} />}
        {/**Who */}
        <div className="flex flex-col justify-center items-start">
          <p className="text-[14px] font-[400]">Who</p>
          <span className="text-gray-400 span_search">{
            Infants > 0 && Pets > 0 ? (Adults + Children) + ' guest ' + ', ' + (Infants) + ' infants' + ', ' + (Pets) + ' Pets' :
              Infants > 0 ? (Adults + Children) + ' guest ' + ', ' + (Infants) + ' infants' :
                Pets > 0 ? (Adults + Children) + ' guest ' + ', ' + (Pets) + ' Pets' :
                  Adults + Children > 0 ?
                    (Adults + Children) + ' guest ' :
                    'Add guests'} </span>
        </div>
        {/**Search Icon */}
        <div
          style={{ background: "#ff385c" }}
          className="flex p-3 gap-2 search_icon text-white rounded-[30px]"
        >
          <icon.IoSearch className="text-xl" />
          <span
            style={{ display: "none" }}
            className=" text-white search_text span_search"
          >
            Search
          </span>
        </div>
      </div>
    </div>
  );
}

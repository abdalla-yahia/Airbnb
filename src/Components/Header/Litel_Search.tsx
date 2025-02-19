"use client";
import * as icon from "@/Utalites/Icons/icons";

export default function Litel_Search() {
  return (
    <div  className={`overflow-hidden search_parent  flex justify-between items-center rounded-[30px] outline-none border hover:shadow-xl  shadow-lg shadow-[#ebebeb] `}>
      {/**Anywhere */}
      <div
        className={`littel_search flex  w-[30%] cursor-pointer justify-center py-2 px-1 `}
      >
        <p className="text-black line-clamp-1">Anywhere</p>
      </div>
      {/**Anyweek */}
      <div
        className={`littel_search flex  w-[30%]  cursor-pointer justify-center py-2 px-1 `}
      >
        <p className="text-black line-clamp-1">Anyweek</p>
      </div>

      {/**Add Guest */}
      <div
        className={`littel_search flex w-[40%]  cursor-pointer justify-between items-center py-2 px-1 `}
      >
        {/**Who */}
        <div className="flex justify-center items-start">
          <span className="text-gray-400 line-clamp-1">Add guests </span>
        </div>
        {/**Search Icon */}
        <div
          style={{ background: "#ff385c" }}
          className="flex p-1  search_icon text-white rounded-[30px]"
        >
          <icon.IoSearch className="text-lg" />
        </div>
      </div>
    </div>
  );
}

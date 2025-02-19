import * as icon from "@/Utalites/Icons/icons";
import PageLang_Currency from "./PageLang_Currency";
import { useState } from "react";
interface ChangeLangProps {
  setChang_Lang_Toggle: (toggle: boolean) => void;
}

export default function Change_Lang({
  setChang_Lang_Toggle,
}: ChangeLangProps) {
  const [Language_Curency,setLanguage_Curency]= useState(true)

  return (
    <div className="Change_Lang flex flex-col justify-start items-start fixed h-[450px] top-[80px] left-[50%] w-[70%] translate-x-[-50%] z-50 bg-white shadow-md rounded-lg ">
      {/**Close button */}
      <icon.IoClose
        onClick={() => setChang_Lang_Toggle(false)}
        className=" absolute top-2 left-2 cursor-pointer "
      />
      {/** Ul Nav */}
      <ul className="Change_Lang flex w-full  border-b-2 mt-7 justify-start items-center gap-2">
        <li onClick={()=>setLanguage_Curency(true)} className={`${Language_Curency ? 'border-b':''} Change_Lang hover:bg-[#fafafa]  cursor-pointer border-black p-2`}>
          Language and region
        </li>
        <li onClick={()=>setLanguage_Curency(false)} className={`${!Language_Curency ?'border-b':''} Change_Lang hover:bg-[#fafafa]  cursor-pointer border-black p-2`}>
          Currency
        </li>
      </ul>
      {/**Pages */}
      <div >
        <PageLang_Currency Language_Curency={Language_Curency}/>
      </div>
    </div>
  );
}

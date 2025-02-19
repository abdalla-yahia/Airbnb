import Link from "next/link";
import * as icon from "@/Utalites/Icons/icons";
import Login_Signup_DropDown from "../Forms/Login_Signup_Form";
import { useEffect, useState } from "react";
import Change_Lang from "../Forms/Change_Lang_Form";

export default function Login() {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [Chang_Lang_Toggle, setChang_Lang_Toggle] = useState(false);
  useEffect(() => {
    document.documentElement.addEventListener("click", (el) => {
      setToggleLogin(false);
      if ((el.target as HTMLElement)?.classList?.contains("backFace")) {
        setChang_Lang_Toggle(false);
      }
    });
  }, []);
  return (
    <div className="flex justify-end items-center gap-3">
      {Chang_Lang_Toggle && <div style={{ display: `${Chang_Lang_Toggle ? 'block' : 'none'}` }} className={` backFace z-40 absolute w-[210%] h-[110vh] -top-5 -left-32 bg-black opacity-35`}></div>}
      {/**Your Home */}
      <Link href={"/"}>
        <h2 className="hover:bg-[#f2f1f1] w-fit text-[0.85rem] font-bold rounded-2xl px-2 py-1 ">
          Airbnb your home
        </h2>
      </Link>
      {/**Languages */}
      <div

        className="hover:bg-[#f2f1f1] cursor-pointer rounded-2xl px-2 py-1"
      >
        <icon.GrLanguage onClick={() => {
          setChang_Lang_Toggle(!Chang_Lang_Toggle);
        }} className="text-lg" />
        {Chang_Lang_Toggle && (
          <Change_Lang
            setChang_Lang_Toggle={setChang_Lang_Toggle}
          />
        )}
      </div>
      {/**DropDown */}
      <div
        onClick={() => setToggleLogin(!toggleLogin)}
        className="dropdown relative border  flex hover:shadow-md cursor-pointer shadow-[#f2f1f1] text-black px-2 py-1 justify-between gap-2 items-center rounded-[30px]  shadow-sm"
      >
        <icon.PiList className="text-[#262626] text-xl" />
        <icon.IoPersonCircle className="text-[#797979] text-4xl" />
        {toggleLogin && <Login_Signup_DropDown />}
      </div>
    </div>
  );
}

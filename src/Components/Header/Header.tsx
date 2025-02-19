"use client";
import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import Login from "./Login";
import Stays_Experiences from "./Stays_Experiences";
import * as icon from "@/Utalites/Icons/icons";
import SubNav from "../SubNav/SubNav";
import { useState } from "react";
import "./style_Header.css";
import Litel_Search from "./Litel_Search";

export default function Header() {
  const [Scroll, setScroll] = useState(false);
  const [Stay_Experience, set_Stay_Experience] = useState(true);

  //On Scroll page
  window.addEventListener("scroll", () => {
    const x = window.scrollY;
    if (x > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  return (
    <header
      className={`${Scroll ? "h-[160px]" : "sm:h-[270px]"
        } w-full fixed top-0 left-0 z-50 h-[140px] flex flex-col justify-start items-start  bg-white pt-2 `}
    >
      <nav className="w-full shadow-md flex flex-col justify-start items-center gap-2 h-[150px] shadow-[#ededed] ">
        {/**First Row */}
        <div className="container  flex-wrap relative hidden sm:flex  justify-between items-center ">
          {/**Logo */}
          <div className="logo w-[20%]">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          {/**Stays_Experiences */}
          <div
            style={{ transition: ".5s" }}
            className={`${Scroll ? "hidden" : "block"
              } w-full  sm:order-3 md:order-2 md:w-[30%] `}
          >
            <Stays_Experiences Stay_Experience={Stay_Experience} set_Stay_Experience={set_Stay_Experience} />
          </div>
          {/**Littel Search */}
          {Scroll && (
            <div style={{ transition: ".5s" }} className="sm:w-[25%] ">
              <Litel_Search />
            </div>
          )}
          {/**Login */}
          <div
            className={`${Scroll ? "sm:order-3 md:order-3" : "sm:order-2 md:order-3"
              } login text-[12px] sm:order-2 md:order-3 w-[80%] sm:w-[40%]`}
          >
            <Login />
          </div>
        </div>
        {/**Second Row */}
        <div className={`${Scroll
            ? "hidden"
            : "hidden sm:flex md:flex lg:flex w-full md:w-[75%] lg:w-[60%] "
          } container  text-[0.75rem]`}
        >
          <Search Stay_Experience={Stay_Experience} />
        </div>
        {/**Third Row */}
        <div className="container bg-white top-2 absolute sm:hidden flex p-4 rounded-[30px] cursor-pointer text-[0.75rem] justify-center items-center gap-2 outline-none border  shadow-lg shadow-[#ebebeb]">
          <icon.IoSearch />
          <span>Start your search</span>
        </div>
        <SubNav Scroll={Scroll} />
      </nav>
    </header>
  );
}

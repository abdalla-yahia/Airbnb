import * as icon from "@/Utalites/Icons/icons";
import SliderItems from "./SliderItems";

export default function Slider() {
  const scrollRight = () => {
    const element = document.querySelector(".icons_slider_content")
    if (element) {
      element.scrollBy({
        left: 200,
        behavior: 'smooth'
      })
    }
  }
  const scrollLeft = () => {
    const element = document.querySelector(".icons_slider_content")
    if (element) {
      element.scrollBy({
        left: -200,
        behavior: "smooth",
      })
    }
  }
  return (
    <div className={` items-center flex  w-full sm:w-[50%] md:w-[60%] lg:w-[70%] justify-between `}>
      {/**Arrow Left */}
      <div
        style={{ boxShadow: "rgb(255, 255, 255) 23px -6px 32px 11px", transition: "0.2s" }}
        className="hidden sm:block border border-gray-400 z-30 w-fit rounded-full p-2 hover:shadow-2xl shadow-black  hover:scale-110 cursor-pointer "
      >
        <icon.BsChevronLeft onClick={() => scrollLeft()} className=" text-black text-xl" />
      </div>
      {/**Content Slider */}
      <div className="icons_slider_content p-2  sm:p-3 w-full z-20 overflow-x-scroll scrollbar-hide">
        <SliderItems />
      </div>
      {/**Arrow Right */}
      <div
        style={{ boxShadow: "rgb(255, 255, 255) -23px -6px 32px 11px", transition: "0.2s" }}
        className="hidden sm:block border border-gray-400 z-30 w-fit rounded-full p-2 hover:shadow-md shadow-black hover:scale-110 cursor-pointer "
      >
        <icon.BsChevronRight onClick={() => scrollRight()} className=" text-black text-xl" />
      </div>
    </div>
  );
}

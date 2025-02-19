import Image from "next/image";
import * as icon from "@/Utalites/Icons/icons";
import "./card_style.css";

export default function Cart() {
  return (
    <section className="flex justify-between items-start mt-[270px] flex-wrap gap-3">
      {/**Card Information */}
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (1).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className="absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
      {/**Card Information */}
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (2).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className=" absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
      {/**Card Information */}
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (3).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className=" absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (4).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className=" absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (5).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className=" absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (6).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className=" absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (7).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className=" absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (8).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className=" absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (9).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className=" absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (10).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className=" absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (11).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className=" absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (12).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className=" absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (13).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className=" absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (14).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className=" absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (15).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className=" absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
      <div className="card w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col flex-grow rounded-xl justify-center items-start  ">
        <div className=" relative rounded-2xl ">
          <Image
            src="/Images/airbnb (16).avif"
            width={480}
            height={180}
            alt="img"
            className="rounded-2xl self-center h-[300px] min-w-full"
          />
          <icon.FaRegHeart className=" absolute top-3 right-3 cursor-pointer text-white hover:scale-110" />
          <icon.BsChevronRight className="hidden arrow-icon absolute top-[50%] right-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
          <icon.BsChevronLeft className="hidden arrow-icon absolute top-[50%] left-3 cursor-pointer rounded-full bg-white p-1 text-xl text-black" />
        </div>
        <div className="card-footer w-full  mt-3">
          <div className="flex w-full justify-between items-center">
            <p>Forio, italy</p>
            <span className="flex justify-center items-center gap-1">
              <icon.FaStar className="text-gray-700" />
              4.5
            </span>
          </div>
          <p className="text-gray-400">2,025 Kilometres away</p>
          <p className="text-gray-400">5 nights. Mar 21-26</p>
          <p className="underline">$1655 total before taxes</p>
        </div>
      </div>
    </section>
  );
}

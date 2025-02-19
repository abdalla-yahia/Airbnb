import * as icon from "@/Utalites/Icons/icons";
import { Poppins } from "next/font/google";

const pope = Poppins({
  subsets: ["latin"],
  weight: "700",
});
export default function Logo() {
  return (
    <div className="flex justify-start items-center">
      <icon.FaAirbnb className="text-[#FF385C] text-[2rem]" />
      <p
        className={`${pope.className} hidden md:block text-[#FF385C] text-[1.5rem] font-semibold `}
      >
        airbnb
      </p>
    </div>
  );
}

import Link from "next/link";

export default function Login_Signup_DropDown() {
  return (
    <div className="flex flex-col absolute w-[130px] top-[100%] z-50 bg-white py-2 -left-[100%] shadow-md rounded-sm">
      <Link
        href={"/"}
        className="text-[10px] hover:bg-[#fafafa] font-extrabold py-1 px-3"
      >
        Sign up
      </Link>
      <Link
        href={"/"}
        className="text-black text-[10px] hover:bg-[#fafafa] py-1 px-3"
      >
        Log in
      </Link>
      <hr />
      <Link
        href={"/"}
        className="text-black text-[10px] hover:bg-[#fafafa] py-1 px-3"
      >
        Gift cards
      </Link>
      <Link
        href={"/"}
        className="text-black text-[10px] hover:bg-[#fafafa] py-1 px-3"
      >
        Airbnb your home
      </Link>
      <Link
        href={"/"}
        className="text-black text-[10px] hover:bg-[#fafafa] py-1 px-3"
      >
        Host and experience
      </Link>
      <Link
        href={"/"}
        className="text-black text-[10px] hover:bg-[#fafafa] py-1 px-3"
      >
        Help center
      </Link>
    </div>
  );
}

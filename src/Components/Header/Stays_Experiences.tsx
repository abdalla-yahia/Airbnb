
export default function Stays_Experiences({ Stay_Experience, set_Stay_Experience }: { set_Stay_Experience: React.Dispatch<React.SetStateAction<boolean>>, Stay_Experience: boolean }) {
  return (
    <div className="flex justify-end sm:justify-center items-center gap-2">
      <span className={`${Stay_Experience ? 'text-black' : 'text-[#c5c4c4]'} cursor-pointer rounded-2xl p-2 font-[400]  hover:bg-[#f2f1f1] hover:text-black`} onClick={() => set_Stay_Experience(true)}>
        Stays
      </span>
      <span onClick={() => set_Stay_Experience(false)} className={`${Stay_Experience ? 'text-[#c5c4c4]' : 'text-black'} cursor-pointer rounded-2xl font-[400]  p-2  hover:bg-[#f2f1f1] hover:text-black`}>
        Experiences
      </span>

    </div>
  )
}

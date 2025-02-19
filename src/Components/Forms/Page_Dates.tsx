import { PageDatesProps } from "@/Interface/interface"
import Dates from "./Dates.json"
import * as icon from "@/Utalites/Icons/icons"

export default function Page_Dates({ setStartCheckin, DateCheckin, setDateCheckin, DateCheckOut, setDateCheckOut }: PageDatesProps) {


  const CurrentDay = new Date().getDate()
  const CurrentMonth = new Date().getMonth() + 1
  const CurrentYear = new Date().getFullYear()

  const scrollRight = () => {
    const element = document.querySelector(".Page_Dates_scrol_Calender")
    if (element) {
      element.scrollBy({
        left: 500,
        behavior: 'smooth'
      })
    }
  }
  const scrollLeft = () => {
    const element = document.querySelector(".Page_Dates_scrol_Calender")
    if (element) {
      element.scrollBy({
        left: -500,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="toggle_dates_time w-full h-full ">
      {/**Calender Dates */}
      <div className="toggle_dates_time flex w-full h-full relative overflow-scroll Page_Dates_scrol_Calender scrollbar-hide">
        <icon.BsChevronLeft onClick={() => scrollLeft()} className="toggle_dates_time hover:bg-gray-100 rounded-full p-1 z-40 text-[20px]  font-bold fixed top-[24%] left-6 text-gray-800 cursor-pointer" />
        <icon.BsChevronRight onClick={() => scrollRight()} className="toggle_dates_time hover:bg-gray-100 rounded-full p-1 z-40 text-[20px]  font-bold fixed top-[24%] right-6 text-gray-800 cursor-pointer" />
        {Dates.map(
          (date, index) =>
            CurrentYear <= date?.year &&
            CurrentMonth + CurrentYear <= +date?.month_number + +date?.year && (
              <div key={index} className="toggle_dates_time flex flex-col w-full mx-2 px-2 py-6  month_section justify-start items-center ">
                <h1 className="toggle_dates_time text-[16px] font-bold p-3 my-3">
                  {date?.month} {date?.year}
                </h1>
                <table className="toggle_dates_time  table w-full  flex-col justify-center items-center">
                  <thead className="toggle_dates_time table-header-group w-full h-10 p-3 my-3">
                    <th className="toggle_dates_time table-cell text-center text-gray-500 mx-2 px-1 text-[12px]">Mon</th>
                    <th className="toggle_dates_time table-cell text-center text-gray-500 mx-2 px-1 text-[12px]">Tue</th>
                    <th className="toggle_dates_time table-cell text-center text-gray-500 mx-2 px-1 text-[12px]">Wed</th>
                    <th className="toggle_dates_time table-cell text-center text-gray-500 mx-2 px-1 text-[12px]">Thu</th>
                    <th className="toggle_dates_time table-cell text-center text-gray-500 mx-2 px-1 text-[12px]">Fri</th>
                    <th className="toggle_dates_time table-cell text-center text-gray-500 mx-2 px-1 text-[12px]">Sat</th>
                    <th className="toggle_dates_time table-cell text-center text-gray-500 mx-2 px-1 text-[12px]">Sun</th>
                  </thead>
                  <tbody className="toggle_dates_time table-row-group p-3 gap-2">
                    {date?.weeks?.map((week, index) => (
                      <tr key={index} className="toggle_dates_time table-row px-3 mx-2  h-10 w-full">
                        <>
                          {week?.map((e, i) => {
                            return (
                              <td key={i} className={`${new Date(DateCheckOut) >= new Date(`${e?.day}-${date?.month}-${date?.year}`) && new Date(DateCheckin) <= new Date(`${e?.day}-${date?.month}-${date?.year}`) && e?.day !== '' ? 'bg-gray-100' : ''} toggle_dates_time table-cell text-center  mx-1 px-1 w-2 h-10`}>
                                <span
                                  onClick={() => {
                                    // Check if day is not in the current month and less than current date
                                    if (!((e?.day as number < CurrentDay) && ((CurrentMonth + CurrentYear) == (+date?.month_number + +date?.year))) && e?.day !== '' && DateCheckin === '') {
                                      setStartCheckin(true)
                                      setDateCheckin(
                                        ` ${new Date(`${e?.day}-${date?.month}-${date?.year}`).toLocaleString("defalute", {
                                          day: "2-digit",
                                          month: "short",
                                          year: "2-digit"
                                        })}`
                                      )
                                    }
                                    else if ((new Date(DateCheckin) > new Date(`${e?.day}-${date?.month}-${date?.year}`)) && e?.day !== '' && e?.day as number >= CurrentDay) {
                                      setStartCheckin(true)
                                      setDateCheckOut('')
                                      setDateCheckin(
                                        ` ${new Date(`${e?.day}-${date?.month}-${date?.year}`).toLocaleString("defalute", {
                                          day: "2-digit",
                                          month: "short",
                                          year: "2-digit"
                                        })}`
                                      )
                                    }
                                    else if (!((e?.day as number < CurrentDay) && ((CurrentMonth + CurrentYear) == (+date?.month_number + +date?.year))) && e?.day !== '' && DateCheckin !== '') {
                                      setDateCheckOut(
                                        ` ${new Date(`${e?.day}-${date?.month}-${date?.year}`).toLocaleString("defalute", {
                                          day: "2-digit",
                                          month: "short",
                                          year: "2-digit"
                                        })}`
                                      )
                                    }
                                  }}
                                  className={`${DateCheckin !== '' && e?.day !== '' && new Date(DateCheckin) <= new Date(`${e?.day}/${date?.month}/${date?.year}`) ? 'hover:bg-black hover:text-white' : ''} ${(e?.day as number) < CurrentDay && CurrentMonth + CurrentYear == +date?.month_number + +date?.year || e?.day == '' ? "text-gray-300" : "text-black hover:border font-bold cursor-pointer"}  ${` ${new Date(`${e?.day}-${date?.month}-${date?.year}`).toLocaleString("defalute", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "2-digit"
                                  })}` === DateCheckin || ` ${new Date(`${e?.day}-${date?.month}-${date?.year}`).toLocaleString("defalute", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "2-digit"
                                  })}` === DateCheckOut
                                    ? "bg-black text-white font-bold "
                                    : ""
                                    } toggle_dates_time text-[15px] w-5 h-9 border-gray-800 rounded-full p-4 `}
                                >
                                  {e?.day}
                                </span>
                              </td>
                            )
                          })}
                        </>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ),
        )}
      </div>
    </section>
  )
}


import { useEffect } from "react"
import CircularSlider from "./Circle";
// #ff385c
export default function Page_Months() {
    useEffect(() => {
        const spans_Months = document.querySelectorAll('.span_Months')
        spans_Months.forEach((span, index) => {
            (span as HTMLElement).style.transform = `rotate(${index * 30}deg) translateY(-90px)`;
            // (span as HTMLElement).style.inset = '1px';
        })

    })
    return (
        <section className="toggle_dates_time flex flex-col justify-center items-center w-full h-full gap-2 py-8">
            <h1>When`s your trip?</h1>
            <div style={{ boxShadow: '0 -5px 5px rgba(0, 0, 0, 0.2), 0 5px 5px #ffffff, inset 0 -20px 30px #ffffffe5, inset 0 10px 20px rgba(0, 0, 0, 0.2)' }} className="toggle_dates_time flex justify-center items-center w-[220px] h-[220px] rounded-[50%] bg-white">
                <div style={{ boxShadow: '0 -5px 5px rgba(255, 255, 255, 0.4), inset 0 5px 3px rgba(255, 255, 255, 0.8), inset 0 -5px 5px rgba(0, 0, 0, 0.2), 0 11px 18px rgba(0, 0, 0, 0.18), 0 -20px 30px rgba(255, 255, 255, 0.8)' }} className="toggle_dates_time flex flex-col  justify-center items-center w-[120px] h-[120px] rounded-[50%] bg-white">
                    <h1 className="toggle_dates_time text-[50px] font-bold">1</h1>
                    <h3>month</h3>
                </div>

                <span className="toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months ">.</span>
                <span className="toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months ">.</span>
                <span className="toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months ">.</span>
                <span className="toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months ">.</span>
                <span className="toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months ">.</span>
                <span className="toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months ">.</span>
                <span className="toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months ">.</span>
                <span className="toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months ">.</span>
                <span className="toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months ">.</span>
                <span className="toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months ">.</span>
                <span className="toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months ">.</span>
                <span className="toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months ">.</span>

                {/* <div className="toggle_dates_time flex justify-center items-center w-[150px] rotate-[180deg] absolute top-[140px] h-[50px] rounded-[30px] bg-red-600">

                </div> */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularSlider />
                </div>
            </div>
        </section>
    )
}



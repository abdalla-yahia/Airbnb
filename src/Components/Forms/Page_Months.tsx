import { useEffect, useState } from 'react';
import ProgressCircle from './Progrees';
// #ff385c
export default function Page_Months() {
    useEffect(() => {
        const spans_Months = document.querySelectorAll('.span_Months');
        spans_Months.forEach((span, index) => {
            (span as HTMLElement).style.transform = `rotate(${index * 30}deg) translateY(-90px)`;
            // (span as HTMLElement).style.inset = '1px';
        });
    });

        const [progress, setProgress] = useState(100/12);

        const increaseProgress = () => {
          if (progress < 100) {
            setProgress((prev) => prev + (100/12));
          }
        };
      
        const decreaseProgress = () => {
          if (progress >= 12) {
            setProgress((prev) => prev - (100/12));
          }
        };
    return (
        <section className='toggle_dates_time flex flex-col justify-center items-center w-full h-full gap-2 py-8'>
            <h1>When`s your trip?</h1>
            <div style={{ boxShadow: '0 -5px 5px rgba(0, 0, 0, 0.2), 0 5px 5px #ffffff, inset 0 -20px 30px #ffffffe5, inset 0 10px 20px rgba(0, 0, 0, 0.2)' }} className='toggle_dates_time flex justify-center items-center w-[220px] h-[220px] rounded-[50%] bg-white'>
                <div
                    style={{ boxShadow: '0 -5px 5px rgba(255, 255, 255, 0.4), inset 0 5px 3px rgba(255, 255, 255, 0.8), inset 0 -5px 5px rgba(0, 0, 0, 0.2), 0 11px 18px rgba(0, 0, 0, 0.18), 0 -20px 30px rgba(255, 255, 255, 0.8)' }}
                    className='toggle_dates_time relative flex flex-col z-40 justify-center items-center w-[120px] h-[120px] rounded-[50%] bg-white'
                >
                    <h1 className='toggle_dates_time text-[50px] font-bold'>1</h1>
                    <h3>month</h3>

                    <span className='toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months '>.</span>
                    <span className='toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months '>.</span>
                    <span className='toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months '>.</span>
                    <span className='toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months '>.</span>
                    <span className='toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months '>.</span>
                    <span className='toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months '>.</span>
                    <span className='toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months '>.</span>
                    <span className='toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months '>.</span>
                    <span className='toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months '>.</span>
                    <span className='toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months '>.</span>
                    <span className='toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months '>.</span>
                    <span className='toggle_dates_time text-[20px] font-bold text-gray-500 absolute span_Months '>.</span>
                    {/* <div style={{boxShadow: '0 -5px 5px rgba(0, 0, 0, 0.2), 0 5px 5px #ffffff, inset 0 -20px 30px #ffffffe5, inset 0 10px 20px rgba(0, 0, 0, 0.2)'}}
        className='toggle_dates_time rotating-element z-30 border-[40px] border-spacing-3 border-collapse border-transparent border-t-green-500 flex justify-center items-center w-[220px] h-[220px] rotate-[180deg] absolute -top-[43%]  rounded-[50%] bg-transparent'>

        </div> */}
                    {/* <svg aria-hidden="true" className="toggle_dates_time rotating-element z-30 border-[40px] border-spacing-3  flex justify-center items-center w-[220px] h-[220px] rotate-[180deg] absolute -top-[43%]  rounded-[50%]" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><mask id="trackBackground"><rect x="0" y="0" width="100%" height="100%" fill="black"></rect><circle cx="50%" cy="50%" fill="none" r="115" stroke="white" stroke-width="60"></circle><path fill="black" filter="blur(10px)" d="M 157 157 L -20 157 L -20 -7.372125185138003 L 142.6193024466364 -7.372125185138003 L 157 157 L 157 334 L -20 334 L -20 157 L 157 157 L 334 157 L 334 334 L 157 334 L 157 157 L 316.37776133769626 114.29485755808408 L 334 114.29485755808408 L 334 157 L 157 157"></path></mask><radialGradient id="trackBackgroundInnerShadow"><stop offset="56%" stop-color="rgba(188, 0, 55, 0.6)"></stop><stop offset="62%" stop-color="transparent"></stop><stop offset="66%" stop-color="transparent"></stop><stop offset="89%" stop-color="rgba(188, 0, 55, 0.4)"></stop></radialGradient><mask id="trackForeground"><rect x="0" y="0" width="100%" height="100%" fill="black"></rect><path fill="white" stroke="white" d="M 157 20 A 4 4 0 0 1 160.99946349592804 16.056733783608024 A 141 141 0 0 1 279.1095819336059 86.5000000000001 A 26 26 0 0 1 279.10958193360585 86.50000000000001 A 26 26 0 0 1 234.07626093681506 112.50000000000006 A 89 89 0 0 0 160.9986535046821 68.08987251077922 A 4 4 0 0 1 157 64 Z"></path></mask><radialGradient id="trackForegroundFill"><stop offset="69%" stop-color="#cb005e"></stop><stop offset="100%" stop-color="#ff234b"></stop></radialGradient><filter id="trackForegroundDropShadow1" filterUnits="userSpaceOnUse"><feDropShadow dx="0" dy="0" flood-color="#ed2343" flood-opacity="0.5" stdDeviation="20"></feDropShadow></filter><filter id="trackForegroundDropShadow2" filterUnits="userSpaceOnUse"><feDropShadow dx="0" dy="0" flood-color="#41000c" flood-opacity="0.9" stdDeviation="3"></feDropShadow></filter><filter id="trackForegroundDropShadow3" filterUnits="userSpaceOnUse"><feDropShadow dx="0" dy="0" flood-color="#ed2343" flood-opacity="1" stdDeviation="6"></feDropShadow><feDropShadow dx="0" dy="0" flood-color="#ed2343" flood-opacity="0.5" stdDeviation="6"></feDropShadow></filter><filter id="trackForegroundInsetShadow1"><feOffset dx="0" dy="-10"></feOffset><feGaussianBlur stdDeviation="10" result="offset-blur"></feGaussianBlur><feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"></feComposite><feFlood flood-color="#ffc0cb" flood-opacity="0.7" result="color"></feFlood><feComposite operator="in" in="color" in2="inverse" result="shadow"></feComposite><feComponentTransfer in="shadow" result="shadow"><feFuncA type="linear" slope="1"></feFuncA></feComponentTransfer></filter><filter id="trackForegroundInsetShadow2"><feOffset dx="0" dy="-2"></feOffset><feGaussianBlur stdDeviation="4" result="offset-blur"></feGaussianBlur><feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"></feComposite><feFlood flood-color="#cf0020" flood-opacity="1" result="color"></feFlood><feComposite operator="in" in="color" in2="inverse" result="shadow"></feComposite><feComponentTransfer in="shadow" result="shadow"><feFuncA type="linear" slope="1"></feFuncA></feComponentTransfer></filter><filter id="trackForegroundInsetShadow3"><feOffset dx="0" dy="-10"></feOffset><feGaussianBlur stdDeviation="5" result="offset-blur"></feGaussianBlur><feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"></feComposite><feFlood flood-color="white" flood-opacity="0.1" result="color"></feFlood><feComposite operator="in" in="color" in2="inverse" result="shadow"></feComposite><feComponentTransfer in="shadow" result="shadow"><feFuncA type="linear" slope="1"></feFuncA></feComponentTransfer></filter></defs><circle cx="50%" cy="50%" fill="url(#trackBackgroundInnerShadow)" filter="blur(10px)" mask="url(#trackBackground)" r="145"></circle><path fill="#ff234b" filter="url(#trackForegroundDropShadow1)" mask="url(#trackBackground)" d="M 157 20 A 4 4 0 0 1 160.99946349592804 16.056733783608024 A 141 141 0 0 1 279.1095819336059 86.5000000000001 A 26 26 0 0 1 279.10958193360585 86.50000000000001 A 26 26 0 0 1 234.07626093681506 112.50000000000006 A 89 89 0 0 0 160.9986535046821 68.08987251077922 A 4 4 0 0 1 157 64 Z"></path><path fill="#ff234b" filter="url(#trackForegroundDropShadow2)" mask="url(#trackBackground)" d="M 157 20 A 4 4 0 0 1 160.99946349592804 16.056733783608024 A 141 141 0 0 1 279.1095819336059 86.5000000000001 A 26 26 0 0 1 279.10958193360585 86.50000000000001 A 26 26 0 0 1 234.07626093681506 112.50000000000006 A 89 89 0 0 0 160.9986535046821 68.08987251077922 A 4 4 0 0 1 157 64 Z"></path><circle cx="50%" cy="50%" fill="url(#trackForegroundFill)" mask="url(#trackForeground)" r="145"></circle><path fill="#ff234b" filter="url(#trackForegroundInsetShadow1)" stroke="#ff234b" d="M 157 20 A 4 4 0 0 1 160.99946349592804 16.056733783608024 A 141 141 0 0 1 279.1095819336059 86.5000000000001 A 26 26 0 0 1 279.10958193360585 86.50000000000001 A 26 26 0 0 1 234.07626093681506 112.50000000000006 A 89 89 0 0 0 160.9986535046821 68.08987251077922 A 4 4 0 0 1 157 64 Z"></path><path fill="#ff234b" filter="url(#trackForegroundInsetShadow2)" stroke="#ff234b" d="M 157 20 A 4 4 0 0 1 160.99946349592804 16.056733783608024 A 141 141 0 0 1 279.1095819336059 86.5000000000001 A 26 26 0 0 1 279.10958193360585 86.50000000000001 A 26 26 0 0 1 234.07626093681506 112.50000000000006 A 89 89 0 0 0 160.9986535046821 68.08987251077922 A 4 4 0 0 1 157 64 Z"></path><path fill="#ff234b" filter="url(#trackForegroundInsetShadow3)" stroke="#ff234b" d="M 157 20 A 4 4 0 0 1 160.99946349592804 16.056733783608024 A 141 141 0 0 1 279.1095819336059 86.5000000000001 A 26 26 0 0 1 279.10958193360585 86.50000000000001 A 26 26 0 0 1 234.07626093681506 112.50000000000006 A 89 89 0 0 0 160.9986535046821 68.08987251077922 A 4 4 0 0 1 157 64 Z"></path></svg> */}
                    <div className="toggle_dates_time -top-[56px] w-[228%] h-[218%] absolute"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ProgressCircle size={250} progress={progress} strokeWidth={50} />
      <div className="toggle_dates_time" style={{ marginTop: 20 }}>
        <button className="toggle_dates_time" onClick={decreaseProgress}>Decrease</button>
        <button className="toggle_dates_time" onClick={increaseProgress} style={{ marginLeft: 10 }}>
          Increase
        </button>
      </div>
    </div>
                
                
                </div>
            </div>

        </section>
    );
}

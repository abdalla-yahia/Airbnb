import Display_Total from "./Display_Total";
import Filter from "./Filter";
import Slider from "./Slider";

export default function SubNav({Scroll}:{Scroll:boolean}) {
  return (
    <nav className={`${Scroll ?'border-t-2':''} items-center mt-5 mb-2 container py-6 flex flex-nowrap justify-between gap-2 `}>
      {/**Slider */}
      <Slider />
      {/**Filter */}
      <Filter />
      {/**Display Total */}
      <Display_Total />
    </nav>
  );
}

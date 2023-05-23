import { useState } from "react";
import slide1 from "../../../assets/Homepage/pafa.jpg";
import slide2 from "../../../assets/Homepage/fitler-club-main.jpg";
import slide3 from "../../../assets/Homepage/garden_wedding_01.jpg";
import slide4 from "../../../assets/Homepage/the-deacon-2.jpg";
export default function Slideshow() {
  const slides = [slide1, slide2, slide3, slide4];
  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className=" w-full h-[300px] lg:h-[600px] flex justify-center bg-gradient-to-b from-[#CDDEFF] to-white">
      <div
        className={
          " w-[100%] lg:w-4/5 h-full flex justify-between bg-cover bg-center lg:rounded-b-3xl transition-all"
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
      >
        <button
          className="btn h-full rounded-none bg-transparent border-none text-2xl font-extrabold rounded-r-2xl"
          onClick={goToPrev}
        >
          {"<"}
        </button>
        <div
          className="flex flex-col justify-center gap-10 items-center
        "
        >
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold ">
            Prepare Event
          </h1>
          <button className="btn btn-lg w-2/3 ">Start Booking</button>
        </div>
        <button
          className="btn h-full rounded-none bg-transparent border-none text-2xl font-extrabold rounded-l-2xl"
          onClick={goToNext}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

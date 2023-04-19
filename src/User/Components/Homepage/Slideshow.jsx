import slide1 from "../../../assets/pafa.jpg";
import slide2 from "../../../assets/fitler-club-main.jpg";
import slide3 from "../../../assets/garden_wedding_01.jpg";
import slide4 from "../../../assets/the-deacon-2.jpg";

export default function Slideshow() {
  return (
    <div className="flex justify-center">
      <div className="carousel w-3/5 max-sm:w-full border-2 border-slate-900">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slide1} alt="Slide 1" className=" w-full" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2 max-md:top-1/2 max-md:gap-3">
            <a href="#slide4" className="btn btn-circle max-md:btn-sm">
              ❮
            </a>
            <div className="flex flex-col text-white text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-xl max-sm:text-base max-[380px]:text-sm gap-5">
              <h1 className="font-extrabold">Prepare Your Event</h1>
              <a className="btn bg-white self-center text-slate-900 hover:text-white">
                Start Booking
              </a>
            </div>
            <a href="#slide2" className="btn btn-circle max-md:btn-sm ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide2} alt="Slide 2" className=" w-full" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2 max-md:top-1/2 max-md:gap-3">
            <a href="#slide1" className="btn btn-circle max-md:btn-sm">
              ❮
            </a>
            <div className="flex flex-col text-white text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-xl max-sm:text-base max-[380px]:text-sm gap-5">
              <h1 className="font-extrabold">Prepare Your Event</h1>
              <a className="btn bg-white self-center text-slate-900 hover:text-white">
                Start Booking
              </a>
            </div>
            <a href="#slide1" className="btn btn-circle max-md:btn-sm ">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

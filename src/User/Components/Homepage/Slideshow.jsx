import slide1 from "../../../assets/pafa.jpg";
import slide2 from "../../../assets/fitler-club-main.jpg";
import slide3 from "../../../assets/garden_wedding_01.jpg";
import slide4 from "../../../assets/the-deacon-2.jpg";

export default function Slideshow() {
  return (
    <div className="flex justify-center">
      <div className="carousel w-1/2 rounded-2xl border-2 border-slate-900">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slide1} alt="Slide 1" className=" w-full" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2 max-md:top-1/2 max-md:gap-3">
            <a
              href="#slide4"
              className="btn btn-circle max-md:w-6 max-sm:text-sm"
            >
              ❮
            </a>
            <div className="flex flex-col text-white text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-xl max-sm:text-base max-[380px]:text-sm gap-5">
              <h1 className="font-extrabold">Prepare Your Event</h1>
              <a className="btn bg-white w-40 max-xl:w-36 max-lg:w-28 max-md:w-20 max-sm:w-12 max-md:text-base max-sm:text-sm self-center text-slate-900 hover:text-white">
                Start Booking
              </a>
            </div>
            <a
              href="#slide2"
              className="btn btn-circle max-md:w-6 max-sm:text-sm "
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide2} alt="Slide 2" className=" w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <div className="flex flex-col text-white text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl gap-5">
              <h1 className="font-extrabold">Prepare Your Event</h1>
              <div className="btn bg-white w-36 self-center text-slate-900 hover:text-white">
                Start Booking
              </div>
            </div>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slide3} alt="Slide 3" className=" w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <div className="flex flex-col text-white text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl gap-5">
              <h1 className="font-extrabold">Prepare Your Event</h1>
              <div className="btn bg-white w-36 self-center text-slate-900 hover:text-white">
                Start Booking
              </div>
            </div>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slide4} alt="Slide 4" className=" w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <div className="flex flex-col text-white text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl gap-5">
              <h1 className="font-extrabold">Prepare Your Event</h1>
              <div className="btn bg-white w-36 self-center text-slate-900 hover:text-white">
                Start Booking
              </div>
            </div>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

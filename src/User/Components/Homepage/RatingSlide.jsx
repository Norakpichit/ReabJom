export default function RatingSlide() {
  return (
    <div className="carousel w-full bg-gradient-to-b from-[#CDDEFF] to-white">
      <div id="rating1" className="carousel-item relative w-full h-96">
        <div
          className="absolute flex justify-between items-center
         transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#rating2" className="btn btn-circle">
            ❮
          </a>
          <div className="flex max-md:flex-col justify-between gap-12">
            <div className="flex justify-between items-center gap-5">
              <div className=" rounded-full w-20 h-20 bg-slate-200"></div>
              <div>
                <p>"I got married through this app" - @Sanmon17</p>
              </div>
            </div>

            <div className="flex justify-between items-center gap-5">
              <div className=" rounded-full w-20 h-20 bg-slate-200"></div>
              <div>
                <p>"I got married through this app" - @Sanmon17</p>
              </div>
            </div>
          </div>
          <a href="#rating2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="rating2" className="carousel-item relative w-full h-96">
        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#rating1" className="btn btn-circle">
            ❮
          </a>
          <div className="flex max-md:flex-col justify-between gap-12">
            <div className="flex justify-between items-center gap-5">
              <div className=" rounded-full w-20 h-20 bg-slate-200"></div>
              <div>
                <p>"I got married through this app" - @Sanmon17</p>
              </div>
            </div>

            <div className="flex justify-between items-center gap-5">
              <div className=" rounded-full w-20 h-20 bg-slate-200"></div>
              <div>
                <p>"I got married through this app" - @Sanmon17</p>
              </div>
            </div>
          </div>
          <a href="#rating1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

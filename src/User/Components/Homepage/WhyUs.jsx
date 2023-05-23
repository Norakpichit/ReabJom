import angwed from "../../../assets/Homepage/angwed.jpg";

export default function WhyUs() {
  return (
    <div className="flex flex-col justify-center bg-gradient-to-t from-[#CDDEFF] to-white items-center w-full max-sm:flex-col-reverse p-10 gap-10">
      <h1 className="text-4xl font-extrabold ">Why us?</h1>
      <div id="whyUs" className="flex items-center justify-evenly">
        <div
          className=" w-[40%] max-md:w-72 max-sm:w-56 h-72 max-md:h-56 max-sm:h-4- rounded-3xl flex justify-center items-center bg-cover bg-center drop-shadow-2xl"
          style={{ backgroundImage: `url(${angwed})` }}
        ></div>
        <div className=" w-[30%] text-center text-3xl font-thin italic drop-shadow-2xl">
          Cambodia first ever event booking website design to make preparing
          events easier
        </div>
      </div>
      <div className="flex items-center w-[80%] justify-evenly">
        <div className="text-3xl font-thin italic w-[40%]">
          Trustworthy partnership and secure information
        </div>
        <div className="flex gap-5 p-5 justify-center">
          <div className=" h-28 w-28 bg-slate-50 rounded-2xl flex justify-center items-center border-2 border-slate-900">
            A
          </div>
          <div className=" h-28 w-28 bg-slate-50 rounded-2xl flex justify-center items-center border-2 border-slate-900">
            B
          </div>
          <div className=" h-28 w-28 bg-slate-50 rounded-2xl flex justify-center items-center border-2 border-slate-900">
            C
          </div>
        </div>
      </div>
    </div>
  );
}

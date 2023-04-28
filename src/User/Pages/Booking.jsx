import CardContainer from "../Components/Booking/CardContainer";
import PackageSlide from "../Components/Booking/PackageSlide";

export default function Booking() {
  return (
    <div className="flex flex-col justify-center">
      <div className="  w-full h-20 flex justify-center items-center text-2xl font-extrabold text-dark bg-gradient-to-b from-[#CDDEFF] to-white">
        <h1>Services</h1>
      </div>
      <CardContainer />
      <div className="w-full h-20 flex justify-center items-center text-2xl font-extrabold text-dark bg-light">
        <h1>Packages</h1>
      </div>
      <PackageSlide />
    </div>
  );
}

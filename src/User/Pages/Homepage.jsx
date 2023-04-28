import RatingSlide from "../Components/Homepage/RatingSlide";
import Slideshow from "../Components/Homepage/Slideshow";
import WhyUs from "../Components/Homepage/WhyUs";

export default function Homepage() {
  return (
    <div className="flex flex-col max-sm:gap-0">
      <Slideshow />
      <WhyUs />
      <RatingSlide />
    </div>
  );
}

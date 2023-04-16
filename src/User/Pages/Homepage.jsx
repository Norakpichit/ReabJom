import Footer from "../Components/Footer";
import Slideshow from "../Components/Homepage/Slideshow";
import WhyUs from "../Components/Homepage/WhyUs";
import Navbar from "../Components/Navbar";

export default function Homepage() {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <Slideshow />
      <WhyUs />
      <Footer />
    </div>
  );
}

import Footer from "./User/Footer";
import Navbar from "./User/Navbar";
import Slideshow from "./User/Slideshow";
import WhyUs from "./User/WhyUs";

function App() {
  return (
    <div className=" flex flex-col gap-10">
      <Navbar />
      <Slideshow />
      <WhyUs />
      <Footer />
    </div>
  );
}

export default App;

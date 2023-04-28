import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./User/Pages/Homepage";
import Booking from "./User/Pages/Booking";
import Navbar from "./User/Components/Navbar";
import Footer from "./User/Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-dark h-16"></div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Booking" element={<Booking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

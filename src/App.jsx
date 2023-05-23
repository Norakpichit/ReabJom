import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./User/Pages/Homepage";
import Booking from "./User/Pages/Booking";
import Login from "./User/Pages/Login";
import Navbar from "./User/Components/Navbar";
import Footer from "./User/Components/Footer";
import Signup from "./User/Pages/Signup";
import SignupInfo from "./User/Pages/SignupInfo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-dark h-16"></div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Booking" element={<Booking />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Signup/Info" element={<SignupInfo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

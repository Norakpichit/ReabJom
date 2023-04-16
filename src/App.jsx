import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./User/Pages/Homepage";
import Booking from "./User/Pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Seller/Sidebar";
import Dashboard from "./Seller/Components/Dashboard";
import Messages from "./Seller/Components/Messages";
import MailBox from "./Seller/Components/Mailbox";
import Booking_schedule from "./Seller/Components/Booking_schedule";
import Sell_history from "./Seller/Components/Sell_history";
import Setting from "./Seller/Components/Setting";
import Log_out from "./Seller/Components/Log_out";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Sidebar connect = {<Dashboard/>}/>} />
        <Route path="/Messages" element={< Sidebar connect = {<Messages/>}/>} />
        <Route path="/MailBox" element={< Sidebar connect = {<MailBox/>}/>} />
        <Route path="/Booking/Schedule" element={< Sidebar connect = {<Booking_schedule/>}/>} />
        <Route path="/Sell/History" element={< Sidebar connect = {<Sell_history/>}/>} />
        <Route path="/Setting" element={< Sidebar connect = {<Setting/>}/>} />
        <Route path="/Log/out" element={< Sidebar connect = {<Log_out/>}/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

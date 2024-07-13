import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Services from "./pages/services";
import RetailService from "./pages/retail-services";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/amazon-full-account-management-services" element={<Services />} />
      <Route path="/online-arbitrage-and-retail-services" element={<RetailService />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;

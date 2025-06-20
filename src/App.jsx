import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/home";
import Mens from "./Components/Mens/Mens.jsx";
import Women from "./Components/Women/Women.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clothes/Men" element={<Mens />} />
        <Route path="/Clothes/Women" element={<Women />} />
      </Routes>
    </>
  );
}

export default App;

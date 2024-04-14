import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Cart from "./Components/Cart";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

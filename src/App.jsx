import "./App.css";
// Components
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Contact from "./components/Contact";
import About from "./components/About";
import ShowProduct from "./components/ShowProduct";

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id/:slug" element={<ShowProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

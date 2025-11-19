import { Routes, Route } from "react-router-dom";
import Home from "./app/homepage/home";
import Menu from "./app/menu/menu";
import About from "./app/about/about";
import Gallery from "./app/gallery/gallery";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;

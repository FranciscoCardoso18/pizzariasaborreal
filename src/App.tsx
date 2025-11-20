import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./app/homepage/home";
import About from "./app/about/about";
import Menu from "./app/menu/menu";
import Gallery from "./app/gallery/gallery";

export default function App() {
  return (
    <>
      <Header />

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="menu">
        <Menu />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <Footer />
    </>
  );
}

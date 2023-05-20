import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Free from "./Components/Free";
import Carouselsmall from "./Components/Carouselsmall";
import Looking from "./Components/Looking";
import Standards from "./Components/Standards";
import Scrollspy from "./Components/Scrollspy";
import Bestseller from "./Components/Bestseller";
import Spotlight from "./Components/Spotlight";
import Footer from "./Components/Footer";
import "./Components/Style.css";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <About/>
      <Shop/>
      <Bestseller/>
      <Free/>
      <Carouselsmall/>
      <Looking/>
      <Spotlight/>
      <Standards/>
      <Scrollspy/>
      <Footer/> 
    </div>
  );
}

export default App;

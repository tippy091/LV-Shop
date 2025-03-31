import "./App.css";
import BannerSection from "./Components/BannerSection/BannerSection";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import BannerCard from "./Components/BannerCard/BannerCard";
import content from "../src/Data/content.json";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <BannerCard productCategory={"SHOP BY CATEGORY"} />
      <BannerSection />
      <BannerCard productCategory={"HOT ITEMS"} />
      <Footer content={content?.footer} />
    </div>
  );
}

export default App;

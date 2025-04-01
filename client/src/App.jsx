import "./App.css";
import BannerSection from "./Components/BannerSection/BannerSection";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import BannerCard from "./Components/BannerCard/BannerCard";
import content from "../src/Data/content.json";
import ServiceCard from "./Components/BannerCard/ServiceCard";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <BannerCard title={"SHOP BY CATEGORY"} />
      <BannerSection />
      <ServiceCard title={"SERVICES"} />
      <Footer content={content?.footer} />
    </div>
  );
}

export default App;

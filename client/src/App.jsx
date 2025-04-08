import "./App.css";
import BannerSection from "./Components/BannerSection/BannerSection";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import BannerCard from "./Components/BannerCard/BannerCard";
import content from "../src/Data/content.json";
import ServiceCard from "./Components/BannerCard/ServiceCard";
import { useEffect } from "react";
import { fetchCategories } from "./api/fetchCategory";
import { useDispatch } from "react-redux";
import { loadCategories } from "./stores/features/Category";
import { setLoading } from "./stores/features/Common";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    fetchCategories()
      .then((res) => {
        dispatch(loadCategories(res));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [dispatch]);

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

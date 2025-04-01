import React from "react";
import Navigation from "../../Components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
// import content from "../../Data/content.json";

const ShopApplicationWrapper = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default ShopApplicationWrapper;

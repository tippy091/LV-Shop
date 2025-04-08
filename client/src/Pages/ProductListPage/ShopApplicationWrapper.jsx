import React from "react";
import Navigation from "../../Components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Spinner from "../../Components/Spinners/Spinner";
import { useSelector } from "react-redux";
// import content from "../../Data/content.json";

const ShopApplicationWrapper = () => {
  const isLoading = useSelector((state) => state?.commonState?.loading);

  return (
    <div>
      <Navigation />
      <Outlet />
      {isLoading && <Spinner />}
    </div>
  );
};

export default ShopApplicationWrapper;

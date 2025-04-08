import React from "react";
import Navigation from "../Components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import BckgImage from "../assets/bckimage2.png";
import BckImage2 from "../assets/bckimage.png";
import Spinner from "../Components/Spinners/Spinner";

const AuthenticationWrapper = () => {
  const isLoading = useSelector((state) => state?.commonState?.loading);
  return (
    <div>
      <Navigation variant="auth" />
      <div className="flex">
        <div className="sm:w-[50%] w-[50%] lg:h-[700px] lg:w-[1000px] hidden md:inline px-2 py-2">
          <img
            src={BckgImage}
            className="bg-cover w-full bg-center"
            alt="shoppingimage"
          />
          <img
            src={BckImage2}
            className="bg-cover w-full bg-center"
            alt="shoppingimage"
          />
        </div>
        <div>
          <Outlet />
        </div>
        {isLoading && <Spinner />}
      </div>
    </div>
  );
};

export default AuthenticationWrapper;

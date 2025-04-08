import React from "react";
import LVBanner from "../../assets/lv-banner2.png";

const HeroSection = () => {
  return (
    <div
      className="relative flex items-center bg-cover flex-start bg-center text-left h-screen max-h-[650px] w-full"
      style={{ backgroundImage: `url(${LVBanner})` }}
    >
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center">
        <main>
          <div className="text-left">
            <h1 className="text-3xl text-white">
              Trending Now: Nautical Collection
            </h1>
          </div>
          <button className="mt-6 underline text-white px-4 py-2 hover:text-black">
            SHOP NOW
          </button>
        </main>
      </div>
    </div>
  );
};

export default HeroSection;

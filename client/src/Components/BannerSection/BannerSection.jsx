import React from "react";
import Carousel from "react-multi-carousel";
import { responsive } from "../../utils/Section.constants";
import LVBanner from "../../assets/lv-banner.png";
import LVBanner1 from "../../assets/lv-banner1.png";
import LVBanner2 from "../../assets/lv-banner3.png";
import LVBanner3 from "../../assets/lv-banner4.png";
import LVBanner4 from "../../assets/lv-banner5.png";
const banner = [LVBanner, LVBanner1, LVBanner2, LVBanner3, LVBanner4];

const BannerSection = () => {
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true} // Tự động chạy ảnh
      autoPlaySpeed={3000} // Chuyển ảnh sau 3 giây
      swipeable={true} // Vuốt được trên mobile
      draggable={true} // Kéo thả được trên desktop
      showDots={true} // Hiển thị chấm tròn chuyển ảnh
      infinite={true} // Lặp lại vô hạn
      partialVisbile={false}
      centerMode={false}
    >
      {banner.map((banner, index) => (
        <div
          key={index}
          className="relative mb-5 flex items-center bg-cover bg-center text-left h-screen max-h-[700px] w-full"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>
      ))}
    </Carousel>
  );
};

export default BannerSection;

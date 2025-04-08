import React from "react";
import MenBags from "../../assets/category-photos/men-bags.png";
import MenSneakers from "../../assets/category-photos/men-sneakers.png";
import MenLeather from "../../assets/category-photos/men-leather.png";
import MenAccess from "../../assets/category-photos/men-accessories.png";
import WomenBags from "../../assets/category-photos/women-bag.png";
import Perfume from "../../assets/category-photos/perfume.png";
import WomenLeather from "../../assets/category-photos/women-leather.png";
import WomenAccess from "../../assets/category-photos/women-accessories.png";

import PropTypes from "prop-types";
const items = [
  {
    title: "Men's Bags",
    imagePath: MenBags,
    category: "men",
    subCategory: "Bags",
  },
  {
    title: "Men's Sneakers",
    imagePath: MenSneakers,
    category: "men",
    subCategory: "Sneakers",
  },
  {
    title: "Men's Leather",
    imagePath: MenLeather,
    category: "men",
    subCategory: "Leather",
  },
  {
    title: "Men's Accessories",
    imagePath: MenAccess,
    category: "men",
    subCategory: "Accessories",
  },
  {
    title: "Women's Bags",
    imagePath: WomenBags,
    category: "women",
    subCategory: "Bags",
  },
  {
    title: "Perfume",
    imagePath: Perfume,
  },
  {
    title: "Women's Leather",
    imagePath: WomenLeather,
    category: "women",
    subCategory: "Leather",
  },
  {
    title: "Women's Accessories",
    imagePath: WomenAccess,
    category: "women",
    subCategory: "Accessories",
  },
];

const Card = ({ title, imagePath }) => {
  return (
    <div className="flex flex-col p-8 ml-2">
      <img
        src={imagePath}
        alt="Men Bags"
        className="max-h-[375px] max-w-[480px] bg-cover bg-center hover:scale-102 cursor-pointer"
      />
      <p className="text-center text-[16px] text-black mt-2 py-2 px-2">
        {title}
      </p>
    </div>
  );
};

const BannerCard = ({ title }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-start mt-5 my-5 gap-2">
        <div className=""></div>
        <p className="text-3xl">{title}</p>
      </div>
      <div className="flex flex-wrap px-[5px]">
        {items &&
          items?.map((item, index) => (
            <Card
              key={item?.title + index}
              title={item.title}
              imagePath={item.imagePath}
            />
          ))}
      </div>
    </div>
  );
};

BannerCard.defaultProps = {};

BannerCard.PropTypes = {
  productCategory: String,
};

export default BannerCard;

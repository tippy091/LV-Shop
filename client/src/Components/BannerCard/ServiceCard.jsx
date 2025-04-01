import React from "react";
import { useNavigate } from "react-router-dom";

import ServicesIMG from "../../assets/services/Services.png";
import GiftingIMG from "../../assets/services/Gifting.png";
import PersonalizationIMG from "../../assets/services/Personalization.png";

const services = [
  {
    title: "Services",
    imagePath: ServicesIMG,
    category: "services",
    subCategory: "",
  },
  {
    title: "Gifting",
    imagePath: GiftingIMG,
    category: "services",
    subCategory: "gifting",
  },
  {
    title: "Personalization",
    imagePath: PersonalizationIMG,
    category: "services",
    subCategory: "personalization",
  },
];

const Card = ({ title, imagePath, category, subCategory }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${category}/${subCategory}`);
  };

  return (
    <div
      className="flex flex-col p-8 ml-2 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={imagePath}
        alt="Men Bags"
        className="max-h-[400px] max-w-[400px] bg-cover bg-center hover:scale-102 cursor-pointer"
      />
      <p className="text-center text-[16px] text-black mt-2 py-2 px-2">
        {title}
      </p>
    </div>
  );
};

const ServiceCard = ({ title }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-start mt-5 my-5 gap-2">
        <div className=""></div>
        <p className="text-3xl">{title}</p>
      </div>
      <div className="grid grid-cols-3">
        {services &&
          services?.map((service, index) => (
            <Card
              key={service?.title + index}
              title={service.title}
              imagePath={service.imagePath}
              category={service.category}
              subCategory={service.subCategory}
            />
          ))}
      </div>
    </div>
  );
};

ServiceCard.defaultProps = {};

ServiceCard.PropTypes = {
  productCategory: String,
};

export default ServiceCard;

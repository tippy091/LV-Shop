import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, thumbnail, slug }) => {
  return (
    <div className="flex flex-col hover:scale-105 bg-gray-50">
      <Link to={`/product/${slug}`}>
        <img
          className="max-h-[500px] max-w-[300px] rounded-lg cursor-pointer"
          src={thumbnail}
          alt={title}
        />
        <div className="flex justify-between items-center">
          <div className="flex flex-col mb-5 ml-5">
            <p className="text-[12px] mt-2 text-black">{title}</p>
            <div>
              <p>${price}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

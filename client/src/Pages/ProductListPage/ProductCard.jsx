import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, thumbnail }) => {
  return (
    <div className="flex flex-col hover:scale-105 bg-gray-50">
      <Link to={`/product/${id}`}>
        <img
          className="max-h-[500px] max-w-[300px] rounded-lg cursor-pointer"
          src={thumbnail}
        />
        <div className="flex justify-between items-center">
          <div className="flex flex-col mb-5 ml-5">
            <p className="text-[12px] mt-2 text-black">{title}</p>
            {price && (
              <p className="text-[13px] items-center text-black">$ {price}</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

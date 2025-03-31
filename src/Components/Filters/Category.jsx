import React from "react";

const Category = ({ types, selectedCategories, onCategoryChange }) => {
  return (
    <div>
      {types?.map((type, index) => {
        return (
          <div key={index} className="flex items-center">
            <input
              name={type?.code}
              type="checkbox"
              sliderclassName="border rounded-lg w-4 h-4 accent-black text-black"
              checked={selectedCategories.includes(type?.types_id)}
              onChange={() => onCategoryChange(type?.types_id)}
            />
            <label className="px-2 py-1 text-[14px]" htmlFor={type?.code}>
              {type?.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Category;

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./PriceFilter.css";

const PriceFilter = ({ priceRange, setPriceRange }) => {
  return (
    <div>
      <p className="text-[16px] text-black mt-5">Price Range</p>
      <RangeSlider
        className={"custom-range-slider"}
        min={0}
        max={50000}
        defaultValue={[priceRange.min, priceRange.max]}
        onInput={(values) =>
          setPriceRange({
            min: values[0],
            max: values[1],
          })
        }
      />
      <div className="flex justify-between">
        <div className="border rounded-lg h-8 mt-4 max-w-[60%] w-[40%] flex items-center">
          <p className="p-2 text-2 text-gray-600">$</p>
          <input
            type="number"
            value={priceRange.min}
            className="outline-none text-gray-600"
            min={0}
            max="50000"
            readOnly
          />
        </div>
        <div className="border rounded-lg h-8 mt-4 max-w-[60%] w-[40%] flex items-center">
          <p className="p-2 text-gray-600">$</p>
          <input
            type="number"
            value={priceRange.max}
            className="outline-none text-gray-600"
            min={0}
            max="50000"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;

import React, { useMemo, useState, useEffect } from "react";
import FilterIcon from "../../Components/Common/FilterIcon";
import content from "../../Data/content.json";
import Category from "../../Components/Filters/Category";
import PriceFilter from "../../Components/Filters/PriceFilter";
import ProductCard from "../ProductListPage/ProductCard";

const categories = content?.categories;

const ProductListPage = ({ categoryType, subCategoryType }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories(
      (prev) =>
        prev.includes(categoryId)
          ? prev.filter((id) => id !== categoryId) // Bỏ chọn nếu đã chọn trước đó
          : [...prev, categoryId] // Thêm nếu chưa chọn
    );
  };
  const categoryContent = useMemo(() => {
    return categories?.find((category) => category.code === categoryType);
  }, [categoryType]);

  useEffect(() => {
    const matchedType = categoryContent?.types.find(
      (type) => type?.name === subCategoryType
    );

    if (matchedType) {
      setSelectedCategories((prev) => [...prev, matchedType.types_id]); // Tick vào category con
    }
  }, [subCategoryType, categoryContent]); // Chỉ chạy khi `categoryContent` thay đổi
  const filteredProducts = useMemo(() => {
    if (!content?.products) return [];

    // Lấy category hiện tại
    const category = categories?.find((cat) => cat.code === categoryType);

    return content.products.filter((product) => {
      const matchesCategory = category
        ? product.category_id === category.id
        : true;
      const matchesType =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.types_id);
      const matchesPrice =
        product.price >= priceRange.min && product.price <= priceRange.max;

      return matchesCategory && matchesType && matchesPrice;
    });
  }, [categoryType, selectedCategories, priceRange]);

  return (
    <div>
      <div className="flex">
        <div className="w-[16%] p-[20px] h-[10%] border rounded-lg m-[20px]">
          {/* Filters */}
          <div className="flex justify-between">
            <p className="text-[16px] text-gray">Filters </p>
            <FilterIcon />
          </div>
          <div className="mb-5">
            <p className="text-[16px] text-black font-bold mt-5">Categories </p>
            <Category
              types={categoryContent?.types}
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
            />
          </div>
          <hr></hr>
          <div>
            <PriceFilter
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>
        </div>
        <div className="p-[10px]">
          <p className="text-black text-lg mb-5">
            {categoryContent?.description}
          </p>
          <div className="pt-1 grid grid-cols-4 gap-10 px-2 mb-20">
            {filteredProducts?.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;

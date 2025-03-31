import React from "react";
import { useParams } from "react-router-dom";
import ProductListPage from "./ProductListPage";

const ProductListPageComponent = () => {
  const { mainCategory, subCategory } = useParams();
  return (
    <ProductListPage
      categoryType={mainCategory}
      subCategoryType={subCategory}
    />
  );
};

export default ProductListPageComponent;

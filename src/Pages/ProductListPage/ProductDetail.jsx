import React, { useEffect, useMemo, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CartIcon from "../../Components/Common/CartIcon";
import content from "../../Data/content.json";
import SizeFilter from "../../Components/Filters/SizeFilter";
import SvgCreditCard from "../../Components/Common/SvgCreditCard";
import SvgCloth from "../../Components/Common/SvgCloth";
import SvgShipping from "../../Components/Common/SvgShipping";
import SvgReturn from "../../Components/Common/SvgReturn";
import ProductCard from "../ProductListPage/ProductCard";
import LVBanner from "../../assets/lv-banner5.png";

const categories = content?.categories;

const extraSections = [
  { icon: <SvgCreditCard />, label: "Secure Payment" },
  {
    icon: <SvgCloth />,
    label: "Size & Fit",
  },
  {
    icon: <SvgShipping />,
    label: "Free Shipping",
  },
  {
    icon: <SvgReturn />,
    label: "Return",
  },
];

const ProductDetail = () => {
  const { product } = useLoaderData();
  const [image, setImage] = useState();

  const [BreadcrumbLinks, setBreadcrumbLink] = useState([]);

  const similarProducts = useMemo(() => {
    return content?.products?.filter(
      (item) => item?.types_id === product?.types_id && item?.id !== product?.id
    );
  }, [product]);

  const productCategory = useMemo(() => {
    return categories?.find(
      (category) => category?.id === product?.category_id
    );
  }, [product]);

  // UseEffect là mỗi lần reload lại trang, hoặc chuyển trang
  useEffect(() => {
    setImage(
      product?.images[0]?.startsWith("http")
        ? product?.images[0]
        : product?.thumbnail
    );
    setBreadcrumbLink([]);
    const arrayLinks = [
      { title: "Shop", path: "/" },
      {
        title: productCategory?.name,
        path: productCategory?.path,
      },
    ];
    const productType = productCategory?.types?.find(
      (item) => item?.types_id === product?.types_id
    );

    if (productType) {
      arrayLinks?.push({
        title: productType?.name,
        path: productType?.name,
      });
    }

    setBreadcrumbLink(arrayLinks);
  }, [productCategory, product]);

  return (
    <div>
      <div className="flex flex-col md:flex-row px-10">
        <div className="w-[100%] lg:w-[50%] md:w-[40%]">
          {/* Image */}
          <div className="flex flex-col md:flex-row">
            <div className="w-[100%] md:w-[20%] justify-center h-[40px] md:h-[420px]">
              {/* Stack Iamges */}
              <div className="flex flex-row md:flex-col justify-center h-full mt-10">
                {product?.images.map((item, index) => (
                  <button
                    onClick={() => setImage(item)}
                    className="rounded-lg w-fit p-2"
                  >
                    <img
                      src={item}
                      className="h-[100px] w-[100px] bg-cover bg-center p- hover:scale-105 bg-gray-100"
                      alt={"Sample-" + index}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full md:w-[80%] flex justify-center md:pt-0 pt-10">
              <img
                src={image}
                className="h-full w-full max-h-[520px] rounded-lg cursor-pointer object-cover mb-5 bg-gray-100"
                alt={product?.title}
              />
            </div>
          </div>
        </div>
        <div className="w-[60%] px-10">
          {/* product description */}
          <Breadcrumb links={BreadcrumbLinks} />

          <p className="text-2xl pt-2">{product?.title}</p>

          {/* Price */}
          <p className="text-xl bold py-2">$ {product?.price}.00</p>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="text-sm bold">Select Size</p>
              <Link
                className="text-sm text-gray-600 hover:text-black"
                to={"https://en.wikipedia.org/wiki/Clothing_sizes"}
              >
                {"Size Guide -> "}
              </Link>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2">
            <SizeFilter sizes={product?.size} hidleTitle />
          </div>
          <div className="flex pt-2">
            <button className="bg-black rounded-lg h-[50px] hover:scale-105">
              <div className="hover:scale-105 flex h-[10px] rounded-lg w-[150px] items-center justify-center bg-black">
                <CartIcon bgColor={"black"} />
                <p className="text-white text-[12px]">Add to Cart</p>
              </div>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4m mt-30">
            {/* */}
            {extraSections?.map((section) => (
              <div className="flex items-center">
                {section?.icon}
                <p className="px-2">{section?.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Product Description */}

      <div className="grid grid-cols-2 w-full p-10 items-center">
        {/* Tiêu đề */}
        <div className="flex flex-wrap px-10 my-5 items-center gap-2 col-span-2">
          <div className="rounded border-1 bg-black w-2 h-10"></div>
          <p className="text-2xl">Product Description</p>
        </div>
        {/* Mô tả */}
        <p className="px-8 py-2">{product.description}</p>

        {/* Ảnh */}
        <img
          className="w-[650px] rounded-lg h-[200] object-cover"
          src={LVBanner}
          alt=""
        />
      </div>
      <div className="flex flex-wrap px-18 my-5 items-center gap-2">
        <div className="rounded border-1 bg-black w-2 h-10"></div>
        <p className="text-2xl">Similar Products</p>
      </div>
      <div className="flex px-10">
        <div className="pt-1 grid grid-cols-4 gap-10 px-10 mb-20">
          {similarProducts?.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
          {!similarProducts?.length && <p>No Products Found</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

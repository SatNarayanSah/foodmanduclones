import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";
import { IoPin } from "react-icons/io5";
import CategoryFoodDesc from "./CategoryFoodDesc";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

//ShortName Cuisine Address1 VendorCoverImageName MinimumOrderAmount ServiceCharge VAT VendorLogoImageName
const RestaurantDetail = () => {
  // "https://foodmandu.com/webapi/api/vendor/GetVendorDetail?VendorId=" +
  // "https://foodmandu.com/webapi/api/v2/Product/GetVendorProductsBySubCategoryV2?VendorId=" +
  const [vendorData, setVendorData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const vendorUrlId = useParams();
  const { id } = vendorUrlId;
  const [showDescID, setShowDescId] = useState("");

  const getVendorDetail = async (id) => {
    try {
      const data = await fetch(
        "https://foodmandu.com/webapi/api/vendor/GetVendorDetail?VendorId=" + id
      );
      const jsonData = await data.json();
      setVendorData(jsonData[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const getCategoryData = async (id) => {
    try {
      const data = await fetch(
        "https://foodmandu.com/webapi/api/v2/Product/GetVendorProductsBySubCategoryV2?VendorId=" +
          id
      );
      const jsonData = await data.json();
      setCategoryData(jsonData);
    } catch (e) {
      console.log(e);
    }
  };
  const handleShowDesc = (id) => {
    if (showDescID === id) {
      setShowDescId(null);
    } else {
      setShowDescId(id);
    }
  };

  useEffect(() => {
    getVendorDetail(id);
    getCategoryData(id);
  }, []);

  return (
    <div>
      <div className="relative">
        <img
          src={vendorData.VendorCoverImageName}
          alt=""
          className="h-[300px] sm:h-[400px] lg:h-[512px] w-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

        <div className="absolute bottom-4 sm:bottom-14 left-4 right-4">
          <div className="flex gap-4">
            <img
              src={vendorData.VendorLogoImageName}
              alt=""
              className="h-20 sm:h-32 w-auto object-contain"
            />
            <div className="text-base sm:text-xl text-white flex flex-col gap-2 justify-center">
              <div className="flex gap-2">
                <IoFastFood />
                <p className="text-white">{vendorData.ShortName}</p>
              </div>
              <div className="flex gap-2">
                <IoPin />
                <p>{vendorData.Address1}</p>
              </div>
            </div>
          </div>
          <div className="text-white  mt-4 flex flex-col gap-4">
            <div>
              <p>Minimum order</p>
              <p>Rs.{vendorData.MinimumOrderAmount}</p>
            </div>
            <div className="flex gap-4">
              <div>
                <p>Additional Service Charge</p>
                <p>Rs.{vendorData.ServiceCharge}</p>
              </div>{" "}
              <div>
                <p>Additional Vat</p>
                <p>Rs.{vendorData.VAT}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full py-2">
        <div className="w-full max-w-[900px] px-4">
          {categoryData.map((data) => (
            <div key={data.categoryId} className="w-full p-4">
              <div className="flex justify-between bg-gray-200 p-4 text-xl">
                <p className="">{data.category}</p>
                <div
                  onClick={() => {
                    handleShowDesc(data.categoryId);
                  }}
                  className="flex gap-4"
                >
                  {showDescID === data.categoryId ? (
                    <FaArrowCircleUp />
                  ) : (
                    <FaArrowCircleDown />
                  )}
                </div>
              </div>
              {showDescID === data.categoryId && (
                <span>
                  {data.items.map((data) => (
                    <CategoryFoodDesc key={data.productId} data={data} />
                  ))}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;

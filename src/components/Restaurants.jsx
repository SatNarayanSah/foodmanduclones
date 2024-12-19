import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";

//kathmandu 27.7026754 85.3191018 1
//Bhaktapur 27.6773968 85.406957  2
//Pokhara 28.208417    83.9554362 3

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [show, setShow] = useState(false);
  const longitude = localStorage.getItem("longitude");
  const latitude = localStorage.getItem("latitude");
  const zoneId = localStorage.getItem("zoneId");

  const fetchRestaurants = async () => {
    const data = await fetch(
      `https://foodmandu.com/webapi/api/Vendor/GetVendors1?Cuisine=&DeliveryZoneId=1&IsFavorite=false&IsRecent=false&Keyword=${query}&LocationLat=27.7026754&LocationLng=85.3191018&PageNo=1&PageSize=12&SortBy=4&VendorName=&VendorTags=%7B%22FEATURED%22:true%7D&search_by=restaurant`
    );
    const jsonData = await data.json();
    setRestaurants(jsonData);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div>
      <div className="p-4 sm:p-8 bg-slate-100 flex flex-col sm:flex-row justify-between gap-4">
        <p className="text-2xl sm:text-4xl">Restaurants and stores</p>
        <div
          onClick={() => {
            setShow(!show);
          }}
          className="flex items-center gap-2 p-2 border-2 w-fit bg-white cursor-pointer"
        >
          Pokhara
          <BsArrowDown />
        </div>
      </div>

      {show && (
        <ul className="border-2 w-fit absolute right-4 sm:right-8 top-[140px] sm:top-[170px] bg-white z-50">
          <li
            onClick={() => {
              localStorage.setItem("latitude", 27.7026754);
              localStorage.setItem("longitude", 85.3191018);
              localStorage.setItem("zoneId", 1);
              setShow(!show);
            }}
            className="p-2"
          >
            Kathmandu
          </li>
          <li
            onClick={() => {
              localStorage.setItem("latitude", 27.6773968);
              localStorage.setItem("longitude", 85.406957);
              localStorage.setItem("zoneId", 2);
              setShow(!show);
            }}
            className="border-y-2 p-2"
          >
            Bhaktapur
          </li>
          <li
            onClick={() => {
              localStorage.setItem("latitude", 28.208417);
              localStorage.setItem("longitude", 83.9554362);
              localStorage.setItem("zoneId", 3);
              setShow(!show);
            }}
            className="p-2"
          >
            Pokhara
          </li>
        </ul>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 p-4 sm:p-8">
        {restaurants.map((data) => (
          <Card propData={data} key={data.Id} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;

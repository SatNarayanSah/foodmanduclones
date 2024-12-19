import { useEffect, useState } from "react";
import { backgroundimage } from "../constants";
import Card from "./Card";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  // hook

  const getRestaurantDetail = async () => {
    const data = await fetch(
      "https://foodmandu.com/webapi/api/Vendor/GetVendors1?Cuisine=&DeliveryZoneId=1&IsFavorite=false&IsRecent=false&Keyword=&LocationLat=27.7026754&LocationLng=85.3191018&PageNo=1&PageSize=8&SortBy=4&VendorName=&VendorTags=%7B%22FEATURED%22:true%7D&VendorTagsCSV=FEATURED,&filtertags=FEATURED&search_by=restaurant"
    );
    const jsonData = await data.json();
    setRestaurantData(jsonData);
  };

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  return (
    <div>
      <div className="relative">
        <img src={backgroundimage} className="h-[400px] md:h-[600px] lg:h-[800px] w-full object-cover" />
        <div className="text-lg flex-col absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4">
          <p className="font-bold text-center">Order food from the widest range of</p>
          <p className="font-bold text-center">restaurants.</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-xl px-4">
            <input
              className="p-4 w-full rounded-xl"
              placeholder="Restaurants or cuisine"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  navigate("/restaurants?query=" + query);
                }
              }}
            />
            <Link to={"/restaurants?query=" + query}>
              <button className="bg-[#FFDD00] p-4 rounded-xl w-full sm:w-auto">
                Find Restaurants
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-4 sm:mx-8 flex justify-between py-4">
        <p className="font-bold text-lg sm:text-xl">FEATURED RESTAURANTS</p>
        <Link to="restaurants" className="flex items-center font-bold text-lg sm:text-xl">
          View All
          <FaArrowRight className="ml-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 px-4 sm:px-8 my-4">
        {restaurantData.map((data) => (
          <Card key={data.Id} propData={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;

import { RiMapPin2Fill } from "react-icons/ri";
import { MdPedalBike } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Card = (props) => {
  const { propData } = props;
  const {
    VendorListingWebImageName,
    Name,
    Address1,
    DeliveryDistanceStr,
    CuisineTags,
    Id
  } = propData;
  
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/restaurants/details/" + Id);
      }}
      className="w-full sm:w-[340px] h-auto border-[1px] shadow-md border-black rounded-md"
    >
      <img
        className="h-48 w-full rounded-t-md object-cover"
        src={VendorListingWebImageName}
        alt=""
      />
      <div className="flex flex-col gap-1 p-4">
        <p className="text-lg font-semibold">{Name}</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
          <div className="flex items-center gap-1">
            <RiMapPin2Fill />
            {Address1}
          </div>
          <div className="flex items-center gap-1">
            <MdPedalBike />
            {DeliveryDistanceStr}
          </div>
        </div>
        <div className="flex items-center overflow-hidden whitespace-nowrap text-ellipsis">
          <span className=" items-start flex justify-start">
            <IoFastFood />
          </span>
          <span className="ml-1 overflow-hidden whitespace-nowrap text-ellipsis">
            {CuisineTags}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

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
      className=" h-80 w-96 border-[1px] shadow-md border-black  rounded-md"
    >
      <img
        className="h-1/2 w-full rounded-md"
        src={VendorListingWebImageName}
        alt=""
      />
      <div className="flex flex-col gap-1 p-4">
        <p>{Name}</p>
        <div className="flex gap-4">
          <div className="flex items-center">
            <RiMapPin2Fill />
            {Address1}
          </div>
          <div className="flex items-center">
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

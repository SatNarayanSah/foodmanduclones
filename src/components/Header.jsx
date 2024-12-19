import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-lg">
      <img
        onClick={() => {
          navigate("/");
        }}
        className="h-12 w-16 sm:h-16 sm:w-20 rounded-full ml-2 sm:ml-10 cursor-pointer"
        src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
      />

      <div className="flex items-center mr-2 sm:mr-10 gap-2 sm:gap-4">
        <FaShoppingCart className="h-6 w-6 sm:h-10 sm:w-10" />
        <h1>10</h1>
      </div>
    </div>
  );
};

export default Header;

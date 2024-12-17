import { CiCirclePlus } from "react-icons/ci";

const CategoryFoodDesc = (props) => {
  const { data } = props;

  return (
    <div className="flex justify-between items-center border-2 p-2">
      <div>
        <p className="font-semibold text-2xl">{data.name}</p>
        <p className="text-gray-400 text-xl">{data.productDesc}</p>
      </div>
      <div className="flex gap-2 items-center">
        <p>{data.price}</p>
        <CiCirclePlus className="text-green-800 text-xl font-bold" />
      </div>
    </div>
  );
};

export default CategoryFoodDesc;

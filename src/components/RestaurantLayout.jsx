import React from "react";
import { Outlet } from "react-router-dom";

const RestaurantLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RestaurantLayout;

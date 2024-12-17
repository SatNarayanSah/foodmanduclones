import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Restaurants from "./components/Restaurants";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantLayout from "./components/RestaurantLayout";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="restaurants" element={<RestaurantLayout />}>
              <Route index element={<Restaurants />} />
              <Route path="details/:id" element={<RestaurantDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import NavBarCategory from "../../Components/Navbar/NavBarCategory/NavBarCategory";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Category from "../../Components/SubContainer/Category/Category";
import CategoryItemData from "./CategoryData";
const CategoryPage = () => {
  const gridCol3 = "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  
  return (
    <div className="h-left pt-4 w-full bg-bgWhite mx-4 my-8 rounded-lg">
      <SearchBar />
      <NavBarCategory />
      {/* Outlet - Route Specifitc Category Based On NavHome Category Choose or CLick
             1st Component-All Category */}
      <Category
        title="Food"
        gridStyle={gridCol3}
        CategoryItemData={CategoryItemData.food}
        CardComponentName='CardHome'
      />
      <Category
        title="Drink"
        gridStyle={gridCol3}
        CategoryItemData={CategoryItemData.drink}
        CardComponentName='CardHome'
      />
    </div>
  );
};

export default CategoryPage;

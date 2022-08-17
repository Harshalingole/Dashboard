import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "../../Components/Navbar/MainNavbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <div className="h-wrapper flexColNoWrapJstIst  gap-0 w-full">
        {/* MainNavbar */}
        <MainNavbar />
        {/* SideBar & Outlet */}
        <div className="sidebar-Outlet bg-bgLightGray  flexRowNoWrapJstIst gap-2  h-auto w-full ">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;

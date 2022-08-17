import React from "react";
import { RiBarChart2Line } from "react-icons/ri";
import {HiOutlineUserCircle} from 'react-icons/hi'
import { NavLink } from "react-router-dom";
import {FiGrid} from 'react-icons/fi'
const Sidebar = () => {
  
  return (
    <>
      <div className="s-wrapper flexColNoWrapJstIct gap-4 py-[1.5rem] px-[2.2rem] mt-0 z-0  w-[6rem] h-[180vh]  bg-bgWhite shadow-sm  border-r-[1px]">
        <NavLink
          activeclassName="active"
          className={"active:bg-bgPurple rounded-md shadow-md"}
          to="/category"
        >
          <FiGrid color="#a1a1a1" size={"2.6rem"} className="p-2" />
        </NavLink>
        <NavLink
          activeclassName="active"
          className={"active:bg-bgPurple rounded-md shadow-md"}
          to="/report"
        >
          <RiBarChart2Line color="#a1a1a1" size={"2.6rem"} className="p-2" />
        </NavLink>
        <NavLink
          activeclassName="active"
          className={"active:bg-bgPurple rounded-md shadow-md"}
          to="/employee"
        >
          <HiOutlineUserCircle
            color="#a1a1a1"
            size={"2.6rem"}
            className="p-2 "
          />
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;

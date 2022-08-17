import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ImageTag from "../../Image/ImageTag";
import EmployeeRoleTag from "./EmployeeRoleTag";
const CardEmployeeInfo = ({ name, role }) => {
  return (
    <div className="flexRowNoWrap justify-between items-center gap-4 bg-bgWhite p-4 rounded-md border-[1px]">
      {/* Right Side */}
      <div className="flexRowNoWrap justify-center items-center gap-3">
        {/* Image */}
        <ImageTag imgStyle={'rounded-full p-7'}/>
        {/* Name & Role */}
        <div className="w-2/3 flexColNoWrapJstIst  gap-2">
          {/* Name */}
          <h2 className="text-sm font-semibold">{name}</h2>
          {/* Role & Other Details */}
          <div className="flexRowNoWrap justify-between items-center gap-4">
            {/* <h2 className="bg-bgLightGray text-bgPurple   !text-[0.8rem] font-medium py-1 px-2 ">
              {role}
            </h2> */}
            <EmployeeRoleTag role={role} />
            <h2 className="text-[0.8rem] font-semibold text-bgPurple">
              Details
            </h2>
          </div>
        </div>
      </div>

      {/* Left Side */}
      <div>
        <BsThreeDotsVertical color="#92929D" size={"1.1rem"} />
      </div>
    </div>
  );
};

export default CardEmployeeInfo;

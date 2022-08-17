import React from "react";
import Edit from "../../../Data/Icon/pen.svg";
import Plus from "../../../Data/Icon/plus.svg";
import EmployeeData from "../../../Pages/Employee/EmployeeData";
import GridContainer from "../../Container/GridContainer/GridContainer";

const SubContainerEmployee = ({ shiftTime, shiftName }) => {
  const { shift1, shift2 } = EmployeeData;

  const gridCol3 = "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2";

  return (
    <div className="empSubC-wrapper!flexColNoWrapJstIst  gap-4 bg-bgWhite shadow-sm rounded-md px-4 py-6  p-2 w-full mb-4">
      {/* Top Div - Shift Time & Edit Option */}
      <div className="flexRowNowrap justify-between items-center gap-2 w-full">
        {/* Shift Time */}
        <h2 className="text-left text-base font-bold">{shiftTime}</h2>
        {/* Action Option -Edit & Plus */}
        <div className="flex flex-row flex-nowrap gap-6 justify-between items-center">
          <img src={Edit} alt="" className="w-5" />
          <img src={Plus} alt="" className="w-5" />
        </div>
      </div>

      {/* Bottom Div - Employee Detail (Grid Container- GridCol3) */}
      {/* Shift1 -Container */}
      <GridContainer
        CardComponentName={"CardEmployeeInfo"}
        CategoryItemData={shiftName === "shift1" ? shift1 : shift2}
        gridColNum={gridCol3}
      />
    </div>
  );
};

export default SubContainerEmployee;

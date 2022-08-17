import React from "react";
import Button from "../../Components/Button/Button";
import SubContainerEmployee from "../../Components/SubContainer/SubContainerEmployee/SubContainerEmployee";
// import {AiOutlinePlus} from 'react-icons/ai'
const Employee = () => {
  return (
    <div className="emp-wrapper ! flexColNoWrapJstIst  w-full px-6 py-8">
      {/* Employee Title Div */}
      <div className="emp-title flexRowNoWrap justify-between item-center gap-2 w-full mb-6">
        {/* Page Title */}
        <h1 className="text-2xl font-semibold">Employee Shift</h1>
        {/* Btn - To Create New Shift */}
        {/* <p className="text-lg font-semibold">Btn</p> */}
        <Button text={"Create New"} textStyle={"bg-bgPurple text-white"}  />
      </div>

      {/* SubContainer- Employee Shift Time & Employee Detail */}
      {/* SubContainer -1 (Shift1) */}
      <SubContainerEmployee
        shiftName={"shift1"}
        shiftTime={"Shift 1 (06 AM -12 AM)"}
      />
      {/* SubContainer -2 (Shift2) */}
      <SubContainerEmployee
        shiftName={"shift2"}
        shiftTime={"Shift 2 (01 PM -11 PM)"}
      />
    </div>
  );
};

export default Employee;

import React from "react";

const EmployeeRoleTag = ({ role }) => {
  const roleStyle =
    role === "Admin"
      ? "bg-bgLightGray text-[#575758]"
      : role === "Cashier"
      ? "bg-green-100 text-textGreen"
      : role === 'Chef'
      ? 'bg-orange-100 text-orange-500'
      : role === 'Waitress'
      ? 'bg-purple-200 text-bgPurple'
      :role === 'Dishwasher'
      ? 'border-[1px]  border-bgPurple text-bgPurple'
      : "bg-bgLightGray text-bgGray"
  return (
    <h2
      className={`text-[0.8rem] font-[300] py-0 px-2 rounded-sm shadow-sm ! ${roleStyle}`}
    >
      {role}
    </h2>
  );
};

export default EmployeeRoleTag;

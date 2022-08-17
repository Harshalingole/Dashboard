import React from "react";

const Button = ({ text, textStyle, icon }) => {
  return (
    <div className={`flexRowNoWrapJctIct gap-2 px-4 py-1 text-center rounded-lg  font-semibold ${textStyle}`}>
      <button
        className={`text-base font-medium  `}
      >
        {text}
      </button>
      {icon}
    </div>
  );
};

export default Button;

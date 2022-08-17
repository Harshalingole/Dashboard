import React from "react";
import BellIcon from "../../Data/Icon/Notification.svg";
import ImageTag from "../Image/ImageTag";
const MainNavbar = () => {
  return (
    <>
      <div className="n-wrapper flexRowWrapJbtIct  gap-4 py-2 px-10 m-0 bg-bgWhite shadow-lg z-2 border-b-[1px] w-full ">
        {/* Nav -Right Side */}
        <div className="n-right flexRowNoWrapJctIct gap-2">
          {/* Logo */}
          <ImageTag imgStyle={"rounded-md p-4"} />
          {/* Logo Text */}
          <h1 className=" font-bold text-xl">Dazzie</h1>
        </div>

        {/* Nav -left Side */}
        <div className="n-left flexRowNoWrapJctIct gap-4 ">
          {/* icon-notification */}
          {/* <BellIcon /> */}
          <img src={BellIcon} alt="icon" className="w-5" />

          {/* Profile */}
          <div className="n-profile flexRowNoWrapJctIct gap-4">
            {/* Profile Image */}
            <ImageTag imgStyle={"rounded-full p-5"} />
            <div>
              {/* Name */}
              <h2 className="font-semibold text-sm">Harshal</h2>
              {/* Role */}
              <h2 className="font-normal text-sm text-textGray">Cashier</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;

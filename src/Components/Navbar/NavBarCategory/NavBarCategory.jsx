import React from "react";
const styleH2 =
  "text-textGray font-medium w-1/5 pb-2 text-center hover:text-textBlack hover:border-b-4 hover:border-b-bgPurple";
const NavBarCategory = () => {
  return (
    <div className="nh-wrapper bg-bgWhite  flexRowNoWrapJstIct justify-around gap-0   p-3 px-0 mt-2">
      <h2 className="font-medium active:text-textBlack w-1/5 text-center pb-2 border-b-4 border-b-bgPurple ">
        All
      </h2>
      <h2 className={styleH2}>Food</h2>
      <h2 className={styleH2}>Drinks</h2>
      <h2 className={styleH2}>Snack</h2>
      <h2 className={styleH2}>Packages</h2>
    </div>
  );
};

export default NavBarCategory;

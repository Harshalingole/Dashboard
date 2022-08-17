import React from "react";

const CardHomeCategory = ({itemName,itemPrice,id}) => {
  return (
    <div key={id} className="c-card flexColNoWrapJsIst gap-2 p-3 rounded-md border-[1px] border-bgGray shadow-md  w-full h-[12rem]  ">
      {/* Image of Item */}
      {/* <img src="" alt="" className='w-full bg-bgGray rounded-lg  shadow-sm h-3/4' />  */}
      <p className="w-full bg-bgGray rounded-lg  shadow-sm h-3/4"></p>  {/* Replace p tag with img */}
      {/* Item info-div */}
      <div className="cd-info flexColNoWrapJsIst gap-0 ">
        <h1 className="font-semibold text-md text-textBlack">{itemName}</h1>
        <h2 className="font-semibold text-md  text-textGreen">${itemPrice}</h2>
      </div>
    </div>
  );
};

export default CardHomeCategory;

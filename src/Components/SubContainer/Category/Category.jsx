import React from "react";
// import CardHome from "../../Card/CardHome/CardHome";
import GridContainer from "../../Container/GridContainer/GridContainer";

const Category = ({title,gridStyle,CategoryItemData,CardComponentName}) => {
  
  return (
    <div className="flex flexColNoWrapJstIst  gap-4 bg-bgWhite px-4 my-4">
      {/* Category Title */}
      <h1 className="font-semibold text-2xl text-textBlack text-start">{title}</h1>
      {/* Category - Items List(Cards) */}
      <GridContainer gridColNum={gridStyle} CategoryItemData={CategoryItemData} CardComponentName={CardComponentName}/> {/* Category(1)- Food*/}
    </div>
  );
};

export default Category;

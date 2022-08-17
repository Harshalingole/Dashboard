/* eslint-disable no-unreachable */
import React from "react";
import CardEmployeeInfo from "../../Card/CardEmployee/CardEmployeeInfo";
import CardHomeCategory from "../../Card/CardHome/CardHomeCategory";
import CardReportOverview from "../../Card/CardReport/CardReportOverview";

const GridContainer = ({ gridColNum, CardComponentName, CategoryItemData }) => {
  // console.log(CategoryItemData);
  const ComponentRender = (CardComponentName) => {
    switch (CardComponentName) {
      case "CardHome":
        return CategoryItemData.map((el, ind) => {
          return (
            <CardHomeCategory
              itemName={el.itemName}
              itemPrice={el.price}
              id={ind}
            />
          );
        });
        break;
      case "CardOverview":
        return CategoryItemData.map((el, ind) => {
          return (
            <CardReportOverview
              reportName={el.name}
              reportNum={el.number}
              percentNum={el.percent}
            />
          );
        });
        break;
      case "CardEmployeeInfo":
        return CategoryItemData.map((el, ind) => {
          return (
            <CardEmployeeInfo
              name={el.name}
              role={el.role}
            />
          );
        });
        break;
      default:
        break;
    }
  };
  return (
    <div className={`grid gap-4  ${gridColNum} w-full`}>
      {ComponentRender(CardComponentName)}
    </div>
  );
};

export default GridContainer;

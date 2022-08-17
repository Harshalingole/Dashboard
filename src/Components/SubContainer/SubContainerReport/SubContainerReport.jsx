/* eslint-disable no-unreachable */
import React from "react";
import CardReportOrder from "../../Card/CardReport/CardReportOrder";
import ReportData from "../../../Pages/Reports/ReportData";
import CardReportSold from "../../Card/CardReport/CardReportSold";
import Button from "../../Button/Button";
import {AiOutlineDown} from 'react-icons/ai'
const SubContainerReport = ({
  title,
  colSpan,
  titleStyle,
  filterTxt,
  CardComponentName,
}) => {
  const textStyle = CardComponentName === 'CardReportSold' ? 'border-2 border-bgPurple text-bgPurple' : 'hidden'
  const {order,orderHead,sold} = ReportData
  // console.log(sold);
  const ComponentRender = (CardComponentName) => {
    switch (CardComponentName) {
      case "CardReportOrder":
        return order.map((el,ind) => {
          return (
            <CardReportOrder orderData={el} id={ind} textStyle='text-sm font-normal p-2'/>
          )
        })
        break;
      case "CardReportSold":
        return sold.map((el,ind) => {
          return (
            <CardReportSold orderData={el} id={ind} textStyle='text-md font-normal'/>
          )
        })
        break;
      default:
        break;
    }
  };
  return (
    <div className={`${colSpan} ! grid-wrapper px-3 bg-bgWhite h-auto  flex flex-col flex-nowrap justify-start items-start gap-0`}>
      {/* Section */}
      <div className="pb-3 border-b-[1px] border-[#E2E2EA] ! pt-4 w-full flex flex-row justify-between items-center">
        <h1 className="text-md text-left font-semibold text-textBlack ">
          {title}
        </h1>
        {/* <button className="hidden !">Best Seller</button> */}
        <Button text={'Best Seller'} textStyle={textStyle} icon={<AiOutlineDown color="bg-bgPurple" />}/>
      </div>
      {/* CardComponent */}
      {CardComponentName === 'CardReportOrder' ?<> <CardReportOrder styleBg='bg-bgLightGray rounded-md' orderData={orderHead} /> {ComponentRender(CardComponentName)}</> : ComponentRender(CardComponentName) }
    </div>
  );
};

export default SubContainerReport;

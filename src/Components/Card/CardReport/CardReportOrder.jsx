import React from "react";
// num='No.',item='Item',quantity="Quantity",revenue='Revenue',profit='Net Profit'
const stylePtag = `text-sm font-bold text-textBlack text-center`
const CardReportOrder = ({styleBg, orderData,textStyle}) => {
  const {num,item,quantity,revenue,profit} = orderData
  return (
    <div className={`${styleBg} ! p-3 mt-1 report-card-order  flexRowNoWrapJstIst  gap-2 w-full`}>
      <p className={`w-[2rem] `}>{num}</p>
      <p className={`w-2/6 text-sm font-bold text-textBlack ${textStyle}`}>{item}</p>
      <p className={`w-1/6 ${stylePtag} ${textStyle}`}>{quantity}</p>
      <p className={`w-1/6 ${stylePtag} ${textStyle}`}>{revenue}</p>
      <p className={`w-1/6  ${stylePtag} ${textStyle}`}>{profit}</p>
    </div>
  );
};

export default CardReportOrder;

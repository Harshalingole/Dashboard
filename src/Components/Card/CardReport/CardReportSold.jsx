import React from 'react'

const CardReportSold = ({textStyle,orderData}) => {
    const {item,quantity} = orderData
  return (
    <div className={`! p-3 mt-1 report-card-order flexRowNoWrap justify-between items-center gap-2 w-full`}>
      <p className={`w-1/6 rounded-lg bg-bgGray p-5 shadow-sm`}></p>
      <p className={`w-2/6 text-sm font-bold text-textBlack text-left `}>{item}</p>
      <p className={`w-2/6 text-md font-normal  text-textGray text-center`}>{quantity} Items</p>
    </div>
  )
}

export default CardReportSold
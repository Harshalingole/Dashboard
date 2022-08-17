import React from "react";
import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'

const CardReportOverview = ({reportName,reportNum,percentNum,reportStatus}) => {
  return (
    <div className="r-card flexColNoWrapJbtIst gap-2 bg-bgWhite  py-4 px-3 rounded-md shadow-sm">
      <div className="w-full flexRowNoWrap justify-between items-start gap-2">
        <h1 className="text-[0.9rem]  font-semibold">{reportName}</h1>
        <p>{percentNum > 0 ? <AiOutlineArrowUp  color="#42BDA1"/> : <AiOutlineArrowDown  color="red"/> }</p>
      </div>
      <div className="w-full flexRowNoWrap justify-between items-start gap-2">
        <h1 className="text-[0.9rem] font-semibold ">{reportNum}</h1>
        <p className={`${percentNum > 0 ? 'text-textGreen' : 'text-[red]'} font-medium `} >{percentNum > 0 ? `+${percentNum}%` : `${percentNum}%`}</p>
      </div>
    </div>
  );
};

export default CardReportOverview;

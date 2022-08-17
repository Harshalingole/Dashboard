import React from "react";
// import CardEmployeeInfo from "../../Components/Card/CardEmployee/CardEmployeeInfo";
import GridContainer from "../../Components/Container/GridContainer/GridContainer";
import SubContainerReport from "../../Components/SubContainer/SubContainerReport/SubContainerReport";
import ReportData from "./ReportData";
const Reports = () => {
  const gridCol4 =
    "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";

  return (
    <div className="r-wrapper w-full h-auto pt-4 my-4 mx-4 bg-bgLightGray">
      {/*SECTION - Grid Container(Overview Report) - GridCol4 ! */}
      <section className="cards-overview-wrapper mb-6 ">
        {/* OverView Report */}
        <GridContainer
          gridColNum={gridCol4}
          CategoryItemData={ReportData.overview}
          CardComponentName="CardOverview"
        />
      </section>

      {/*SECTION - Grid Container(Report- Latest Order & itemSold) - GridCol2 ! */}
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {/* Latest Order- SubContainer */}
        <SubContainerReport
          title="Latest Order"
          colSpan="col-span-4"
          CardComponentName="CardReportOrder"
        />
        {/* ItemSold- SubContainer */}
        <SubContainerReport
          title="Item Sold"
          colSpan="col-span-2"
          CardComponentName="CardReportSold"
        />
      </section>
    </div>
  );
};

export default Reports;

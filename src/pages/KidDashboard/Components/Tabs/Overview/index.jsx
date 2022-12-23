/** @format */

import React from "react";
import Maintitle from "../../../../../components/globalComponents/Maintitle";
import Activities from "./Activities";
import DeviceInfo from "./DeviceInfo/DeviceInfo";
import QuickControl from "./QuickContorls";
import Chart from "./ScreenTime/Chart";
import DailyChart from "./ScreenTime/DailyChart";
import Highchart from "./ScreenTime/HighChart";

const KidOverview = (props) => {
  const { data } = props;
  return (
    <div>
      <Maintitle title="Quick Controls" url="/setup_child" />
      <QuickControl data={data} />
      <Maintitle title="Screen Time" />
      <Chart />
      <Highchart />
      {/* <DailyChart></DailyChart> */}
      <Maintitle title="Jack's Activity " />
      <Activities data={data} />
      <Maintitle title="Device Info " />
      <DeviceInfo />
    </div>
  );
};

export default KidOverview;

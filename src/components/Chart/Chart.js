import React from "react";
import "./Chart.scss";
import { Pie } from "react-chartjs-2";
import useBudget from "../../hooks/useBudget";



const Chart = React.memo(({ type, budget }) => {
  const { labels, values, colors } = useBudget(type, budget);

  const data = {
    labels,
    datasets: [
      {
        label: "My First Dataset",
        data: values,
        backgroundColor: colors,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <h3>Title</h3>
      <Pie data={data} />
    </div>
  );
});

export default Chart;

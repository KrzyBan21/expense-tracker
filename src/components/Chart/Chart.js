import React from "react";
import "./Chart.scss";
import { Pie } from "react-chartjs-2";
import useBudgetToChart from "../../hooks/useBudgetToChart";
import useBudgetSum from "../../hooks/useBudgetSum";

const Chart = React.memo(({ type, budget, title }) => {
  const { labels, values, colors } = useBudgetToChart(type, budget);
  const sum = useBudgetSum(type, budget);

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

  const filteredBudget = budget.filter((el) => el.type === type);
  const noData = filteredBudget.length > 0 ? null : { display: "block" };

  return (
    <div className="chart">
      <h3 className="chart__title">{title}</h3>
      <p className="chart__sum">{sum > 0 ? "Total: " + sum : null}</p>
      <div className="chart__pie">
        <Pie data={data} />
      </div>
      <p className="chart__no-data" style={noData}>
        There are no {title}
      </p>
    </div>
  );
});

export default Chart;

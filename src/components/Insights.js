import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import {
  ChartComponent,
  ChartInfo,
  ColorBox,
  Description,
  DescriptionContainer,
  Stats,
} from "./styles/Insight.Style";
import { useSelector } from "react-redux";
Chart.register(ArcElement);

function Insights() {
  const { expenses, subTotal } = useSelector((store) => store.expenseReducer);

  const bgColors = expenses.map((e) => e.color);
  const chartData = expenses.map((e) => e.amount);

  const graphConfig = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: chartData,
          backgroundColor: bgColors,
          hoverOffset: 4,
          borderRadius: 60,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 150,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
  };

  return (
    <>
      <DescriptionContainer>
        <Description>
          {expenses.map((e, k) => (
            <>
              <ColorBox style={{ backgroundColor: e.color }} />
              <span>{e.expenseType}</span>
            </>
          ))}
        </Description>
        <h2>Total: ₹{subTotal.toLocaleString()}</h2>
      </DescriptionContainer>

      <Stats>
        <ChartComponent>
          <Doughnut {...graphConfig}></Doughnut>
        </ChartComponent>
        <ChartInfo>
          {expenses.map((e, k) => {
            return (
              <h3 key={k}>
                {e.expenseType}: {Math.round((e.amount / subTotal) * 100)}%
              </h3>
              // <tr key={e.id}>
              //   <td>{e.expenseType}: </td>
              //   <td> </td>
              // </tr>
            );
          })}
        </ChartInfo>
      </Stats>
    </>
  );
}

export default Insights;

import React from 'react'
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
TimeScale,
ChartOptions
} from 'chart.js';
import { Line } from "react-chartjs-2";
import { faker } from '@faker-js/faker';

const LineChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    TimeScale,
    Title,
    Tooltip,
    Legend
   );
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: "First dataset",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        fill: false,
        borderColor: "#742774"
      }
    ]
  };

  return (
    <div>
      <Line data={data} />
    </div>
  )
}

export default LineChart
import React from 'react'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'

const PolarChart = () => {
  ChartJS.register(
    RadialLinearScale,
    Title,
    Tooltip,
    Legend
   );
   const  labels = [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
  const data = {
    labels,
    datasets: [{
      label: 'My First Dataset',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };
  return (
    <div>
      <PolarArea data={data} />
    </div>
  )
}

export default PolarChart
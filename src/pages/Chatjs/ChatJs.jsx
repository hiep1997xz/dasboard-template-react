import React from 'react'
import BarCharts from './ChatAllOption/BarCharts'
import DoughnutChart from './ChatAllOption/DoughnutChart'
import LineChart from './ChatAllOption/LineChart'
import PieChart from './ChatAllOption/PieChart'
import PolarChart from './ChatAllOption/PolarChart'
import './ChatJs.scss'

const ChatJs = () => {
  return (
    <div className="chat_container">
      <div className='group_charts'>
        <div className="bar">
          <h1>Bar Chart</h1>
          <BarCharts />
        </div>
        <div className="line">
          <h1>Line Chart</h1>
          <LineChart />
        </div>
        <div className="doughnut">
          <h1>Doughnut Chart</h1>
          <DoughnutChart />
        </div>
        <div className="pie">
          <h1>Pie Chart</h1>
          <PieChart />
        </div>
        <div className="polar">
          <h1>Polar Area Chart</h1>
          <PolarChart />
        </div>
      </div>
      <h1 className='text'>
        <a
          href="https://www.chartjs.org/docs/latest/charts/area.html"
          target="_blank"
          rel="noopener noreferrer">
          Chart code example link
        </a>
      </h1>
    </div>
  )
}

export default ChatJs

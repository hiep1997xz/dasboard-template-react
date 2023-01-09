import React from 'react'
import BarCharts from './ChatAllOption/BarCharts'
import DoughnutChart from './ChatAllOption/DoughnutChart'
import LineChart from './ChatAllOption/LineChart'
import PolarChart from './ChatAllOption/PolarChart'
import './ChatJs.scss'

const ChatJs = () => {
  return (
    <div className="chat_container">
      <h1>
        <a href='https://www.chartjs.org/docs/latest/charts/area.html' target="_blank" rel="noopener noreferrer">Chart code example link</a>
      </h1>
      <div className='mb-100px'>
        <h1>Bar Chart</h1>
        <BarCharts />
      </div>
      <div className='mb-100px'>
        <h1>Line Chart</h1>
        <LineChart />
      </div>
      <div className='mb-100px'>
        <h1>Doughnut Chart</h1>
        <DoughnutChart />
      </div>
      <div className='mb-100px'>
        <h1>Polar Area Chart</h1>
        <PolarChart />
      </div>
    </div>
  )
}

export default ChatJs

import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
} from 'chart.js';

// Register into chartJS

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const RiskTrendsChart = () => {

  //  selectors, constants, states declarations

  const trend = useSelector(state => state.risk.trend);
  const searchTerm = useSelector(state => state.search.term.toLowerCase());
  const componentLabel = 'risk trend';

  // search Filter

  if (
    searchTerm &&
    searchTerm.trim() !== '' &&
    !componentLabel.includes(searchTerm)
  ) {
    return null;
  }

  // data for graph

  const data = {
    labels: trend.labels,
    datasets: [
      {
        data: trend.data,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
        fill: true
      }
    ]
  };

  // options for graph

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#888'
        }
      },
      y: {
        display: false
      }
    }
  };

  return (
    <div className="card" aria-label="Risk Trend Chart">
      <h3>Risk Trend</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default RiskTrendsChart;

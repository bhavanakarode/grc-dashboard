import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
} from 'chart.js';

// Register into chartJS

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const ComplianceCoverageChart = () => {

  //  selectors, constants, states declarations
  const { coverage } = useSelector(state => state.compliance);
  const searchTerm = useSelector(state => state.search.term.toLowerCase());
  const componentLabel = 'compliance coverage';

  // search filter

  if (
    searchTerm &&
    searchTerm.trim() !== '' &&
    !componentLabel.includes(searchTerm)
  ) {
    return null;
  }

  // data an lables for chart

  const data = {
    labels: coverage.labels,
    datasets: [
      {
        label: 'Compliance %',
        data: coverage.data,
        backgroundColor: '#3b82f6',
        borderRadius: 6,
        barPercentage: 0.5
      }
    ]
  };

  // options for chart

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: context => `${context.parsed.y}%`
        }
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
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: value => `${value}%`,
          color: '#888'
        },
        grid: {
          color: 'rgba(136,136,136,0.2)'
        }
      }
    }
  };

  return (
    <div className="card" aria-label="Compliance Coverage Chart">
      <h3>Compliance Coverage</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ComplianceCoverageChart;

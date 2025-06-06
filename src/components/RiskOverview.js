import React from 'react';
import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const RiskOverview = () => {

  //  selectors, constants, states declarations

  const { score, categories } = useSelector(state => state.risk);
  const searchTerm = useSelector(state => state.search.term.toLowerCase());
  const componentLabel = 'risk overview';

  // search filter

  if (
    searchTerm &&
    searchTerm.trim() !== '' &&
    !componentLabel.includes(searchTerm)
  ) {
    return null;
  }

  // data for chart

  const chartData = {
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: ['#3b82f6', '#2c313a'],
        borderWidth: 0,
        cutout: '80%',
      }
    ]
  };

  return (
    <div className="card" aria-label="Risk Overview Panel">
      <h3>Risk Overview</h3>
      <div style={{ position: 'relative', width: 140, height: 140, margin: '0 auto' }}>
        <Doughnut data={chartData} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'rgb(59, 130, 246)',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>{score}</div>
        <div style={{
          position: 'absolute',
          top: '64%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.75rem',
          color: 'gray'
        }}>:100</div>
      </div>
      <ul style={{ marginTop: '1rem' }}>
        {categories.map((cat, index) => <li key={index}>{cat}</li>)}
      </ul>
    </div>
  );
};

export default RiskOverview;

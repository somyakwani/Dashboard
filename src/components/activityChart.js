import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: [5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27],
  datasets: [
    {
      label: 'Activity',
      data: [4000, 7000, 3000, 5000, 6000, 3000, 7000, 8000, 14000, 7000, 10000, 6000],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Activity',
      color: 'white',
    },
  },
  scales: {
    x: {
      ticks: { color: 'white' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
    y: {
      ticks: { color: 'white' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
      beginAtZero: true,
    },
  },
};

const ActivityChart = () => {
  return (
    <div style={{ backgroundColor: '#222831', padding: '20px', borderRadius: '10px', color: 'white' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Activity</h4>
        <select className="form-select bg-dark text-white" style={{ width: '100px' }}>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
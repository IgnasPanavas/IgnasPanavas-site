"use client";

import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,  // For string-based x-axis labels
  LinearScale,   // For y-axis (numerical values)
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
type ChartData = {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      fill: boolean;
      tension: number;
    }[];
  };
export default function DynamicChart() {
    const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://127.0.0.1:5000/historical/account-balance');
      const data = await response.json();
      
      // Transform the fetched data for Chart.js
      const chartData: ChartData = {
        labels: data.labels,  // Dates from backend
        datasets: [
          {
            label: 'Account Balance',
            data: data.data,  // Account balances from backend
            borderColor: 'rgb(75, 192, 192)',  // Styling handled on frontend
            fill: false,
            tension: 0.1
          }
        ]
      };

      setChartData(chartData);
    }

    fetchData();
  }, []);

  if (!chartData) return <p>Loading...</p>;

  return <Line data={chartData} />;
}

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {Bar} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "right",
      labels: {
        font: {size: 18},
      },
    },
    title: {
      display: true,
      text: "Average Weekly Learner Outlook",
    },
  },
  scales: {
    x: {
      display: true, // Hide the x-axis line
      ticks: {
        display: true, // Display the x ticks
        font: {
          size: 12,
        },
      },
      grid: {
        display: false, // Hide the grid lines
      },
    },
    y: {
      max: 100,
      ticks: {
        callback: (value) => `${value}%`,
      },
    },
  },
};

const labels = ["1", "2", "3", "4"];

const data = {
  labels,
  datasets: [
    {
      data: [42, 92, 70, 60],
      backgroundColor: ["#4472c4", "#4472c4", "#4472c4", "#ed7d32"],
      label: "Average Weekly Learner Outlook",
      barThickness: 150, // Adjust the width of each column
    },
  ],
};

function BarChart() {
  return <Bar options={options} data={data} />;
}

export default BarChart;

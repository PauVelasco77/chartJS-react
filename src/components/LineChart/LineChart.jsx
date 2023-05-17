import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {Line} from "react-chartjs-2";
import "./LineChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
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
      max: 120,
      min: 0,
      ticks: {
        callback: (value) => `${value}%`,
      },
    },
  },
};

function LineChart({data}) {
  return (
    <div className="line-chart-container">
      <Line options={options} data={data} />
    </div>
  );
}

export default LineChart;

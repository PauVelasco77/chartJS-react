import {faker} from "@faker-js/faker";
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

const labels = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];

const data = {
  labels,
  datasets: [
    {
      label: faker.name.fullName(),
      data: labels.map(() => faker.datatype.number({min: 50, max: 100})),
      borderColor: "#71ad47",
      backgroundColor: "#71ad47",
    },
    {
      label: faker.name.fullName(),
      data: labels.map(() => faker.datatype.number({min: 40, max: 80})),
      borderColor: "#ffbf00",
      backgroundColor: "#ffbf00",
    },
    {
      label: faker.name.fullName(),
      data: labels.map(() => faker.datatype.number({min: 100, max: 101})),
      borderColor: "#4472c4",
      backgroundColor: "#4472c4",
    },
    {
      label: faker.name.fullName(),
      data: labels.map(() => faker.datatype.number({min: 100, max: 101})),
      borderColor: "#ee7d30",
      backgroundColor: "#ee7d30",
    },
    {
      label: faker.name.fullName(),
      data: labels.map(() => faker.datatype.number({min: 20, max: 120})),
      borderColor: "#a4a4a4",
      backgroundColor: "#a4a4a4",
    },
  ],
};

function LineChart() {
  return (
    <div className="line-chart-container">
      <Line options={options} data={data} />
    </div>
  );
}

export default LineChart;

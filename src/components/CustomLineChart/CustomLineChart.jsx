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
import LineChart from "../LineChart/LineChart";
import {faker} from "@faker-js/faker";
import {useState} from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const originaLabels = [
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

const colors = [
  "#71ad47",
  "#FF0000",
  "#ffbf00",
  "#4472c4",
  "#ee7d30",
  "#a4a4a4",
];

function CustomLineChart() {
  const [data, setData] = useState({
    labels: originaLabels,
    datasets: [
      {
        label: faker.name.fullName(),
        data: originaLabels.map(() =>
          faker.datatype.number({min: 50, max: 100})
        ),
        borderColor: colors[0],
        backgroundColor: colors[0],
        selected: true,
      },
      {
        label: faker.name.fullName(),
        data: originaLabels.map(() =>
          faker.datatype.number({min: 50, max: 100})
        ),
        borderColor: colors[1],
        backgroundColor: colors[1],
        selected: true,
      },
      {
        label: faker.name.fullName(),
        data: originaLabels.map(() =>
          faker.datatype.number({min: 40, max: 80})
        ),
        borderColor: colors[2],
        backgroundColor: colors[2],
        selected: true,
      },
      {
        label: faker.name.fullName(),
        data: originaLabels.map(() =>
          faker.datatype.number({min: 100, max: 101})
        ),
        borderColor: colors[3],
        backgroundColor: colors[3],
        selected: true,
      },
      {
        label: faker.name.fullName(),
        data: originaLabels.map(() =>
          faker.datatype.number({min: 100, max: 101})
        ),
        borderColor: colors[4],
        backgroundColor: colors[4],
        selected: true,
      },
      {
        label: faker.name.fullName(),
        data: originaLabels.map(() =>
          faker.datatype.number({min: 20, max: 120})
        ),
        borderColor: colors[5],
        backgroundColor: colors[5],
        selected: true,
      },
    ],
  });

  const handleClickUser = (index) => {
    setData((prevState) => ({
      ...prevState,
      datasets: prevState.datasets.map((item, i) => {
        if (i === index) {
          if (item.selected) {
            return {
              ...item,
              borderColor: "transparent",
              backgroundColor: "transparent",
              selected: false,
            };
          } else {
            return {
              ...item,
              borderColor: colors[i],
              backgroundColor: colors[i],
              selected: true,
            };
          }
        } else {
          return {
            ...item,
          };
        }
      }),
    }));
  };

  console.log("RENDER");
  return (
    <div className="line-chart-container">
      <ul>
        {data?.datasets.map((item, index) => (
          <li key={index}>
            <button onClick={() => handleClickUser(index)}>
              <p>{item.label}</p>
            </button>
          </li>
        ))}
      </ul>
      <LineChart data={data} />
    </div>
  );
}

export default CustomLineChart;

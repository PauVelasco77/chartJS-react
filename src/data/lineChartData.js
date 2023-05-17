import {faker} from "@faker-js/faker";

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

export default data;

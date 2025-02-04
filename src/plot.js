import Papa from "papaparse";
import Chart from "chart.js/auto";
import {
  topojson,
  ChoroplethController,
  GeoFeature,
  ColorScale,
  ProjectionScale,
} from "chartjs-chart-geo";
import { getStateAbbreviation, getStateName } from "./stateConvert.js";

// Register the necessary components
Chart.register(ChoroplethController, GeoFeature, ColorScale, ProjectionScale);

let chartInstance; // Variable to hold the chart instance

// import data from './files/scrubbed.csv';
const csvFilePath = "./files/scrubbed.csv";

async function parseData() {
  let parsedData = [];
  const response = await fetch(csvFilePath);
  const csvData = await response.text();
  // Parse the CSV data using PapaParse
  Papa.parse(csvData, {
    header: true, // Treat the first row as headers
    dynamicTyping: true, // Automatically convert numbers, booleans, etc.
    skipEmptyLines: true, // Ignore empty lines
    complete: function (results) {
      parsedData = results.data; // The parsed CSV data
      // Call the function to create the chart after parsing the data
      createChart(parsedData);
    },
    error: function (error) {
      console.error("Error parsing CSV:", error);
    },
  });
}

async function createChart(data) {
  const us = await fetch(
    "https://cdn.jsdelivr.net/npm/us-atlas/states-10m.json"
  ).then((r) => r.json());

  const states = topojson.feature(us, us.objects.states).features;
  const ctx = document.getElementById("output").getContext("2d");

  chartInstance = new Chart(ctx, {
    type: "choropleth",
    data: {
      labels: states.map((d) => d.properties.name),
      datasets: [
        {
          label: "US Sightings",
          // below uses filter to find total count - takes some time
          data: states.map((d) => {
            const matchingRows = data.filter(
              (row) =>
                row.state && getStateName(row.state) === d.properties.name
            );
            const count = matchingRows.length;
            return {
              feature: d,
              value: count
              // below would be if a state had an individual value to display
              //   data: states.map((d) => {
              //     const stateData = data.find(
              //       (row) => row.state === d.properties.name
              //     );
              //     return {
              //       feature: d,
              //       value: stateData ? stateData.value : 50, // Replace 'value' with the appropriate field from your CSV
            };
          }),
        },
      ],
    },
    options: {
      //   showOutline: true,
      //   showGraticule: true,
      geo: {
        projection: "albersUsa",
      },
      scales: {
        color: {
          type: "color",
          axis: "x",
          domain: [0, 100],
          range: ["white", "red"],
        },
      },
      plugins: {
        legend: {
          display: false, // Disable the legend
        },
        title: {
          display: true,
          text: "US Sightings", // Set your chart title here
          font: {
            size: 24,
          },
        },
        // subtitle: {
        //   display: true,
        //   text: "Source: Your Data Source Here",
        //   font: {
        //     size: 14,
        //     style: "italic",
        //   },
        //   padding: {
        //     top: 10,
        //   },
        // },
      },
    },
  });
}

export { parseData };

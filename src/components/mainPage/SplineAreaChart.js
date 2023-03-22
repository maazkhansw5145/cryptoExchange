import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  ScriptableContext
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
ChartJS.defaults.plugins.legend.display = false;
function SplineAreaChart(props) {
  const [dates, setDates] = useState([
    "4 PM",
    "4:10 PM",
    "4:20 PM",
    "4:30 PM",
    "4:40 PM",
    "4:50 PM",
  ]);

  useEffect(() => {
    if (props.timeFilter === "6M") {
      setDates(["Jan", "Feb", "March", "April", "May", "June"]);
    } else if (props.timeFilter === "1M") {
      setDates(["1 Jan", "7 Jan", "13 Jan", "19 Jan", "25 Jan", "30 Jan"]);
    } else if (props.timeFilter === "1W") {
      setDates(["1 Jan", "2 Jan", "3 Jan", "4 Jan", "5 Jan", "6 Jan"]);
    } else if (props.timeFilter === "1D") {
      setDates(["9 AM", "1 PM", "5 PM", "9 PM", "2 AM", "6 AM"]);
    } else if (props.timeFilter === "4H") {
      setDates(["4 PM", "5 PM", "6 PM", "6:30 PM", "7 PM", "7:30 PM"]);
    }
  }, [props.timeFilter]);

  let dataSet = [10, 20, 30, 42, 51, 82];

  if (props.timeFilter === "6M") {
    dataSet = [55, 70, 40, 20, 60, 12];
  } else if (props.timeFilter === "1M") {
    dataSet = [35, 50, 10, 40, 30, 22];
  } else if (props.timeFilter === "1W") {
    dataSet = [45, 30, 20, 60, 30, 42];
  } else if (props.timeFilter === "1D") {
    dataSet = [25, 10, 40, 10, 30, 62];
  } else if (props.timeFilter === "4H") {
    dataSet = [15, 20, 10, 20, 30, 22];
  }

  console.log(dataSet);
  const options = {
    scales: {
      y: {
       ticks: {
        display: false
       }
      },
    },
  };
  let data = {
    labels: dates,
    datasets: [
      {
        data: dataSet,
        backgroundColor:(context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'blue');
          gradient.addColorStop(1, 'black');
          return gradient;
        },
        tension: 0.4,
        fill: true,
        borderWidth: 0,
        pointStyle: false,
        pointBorderColor: "rgba(71, 51, 166, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(71, 51, 166, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  };

  return (
    <div>
      <Line data={data} width={836} height={413} options={options} />
    </div>
  );
}

export default SplineAreaChart;

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// 🔥 Center text plugin
const centerTextPlugin = {
  id: "centerText",
  beforeDraw(chart) {
    const { width } = chart;
    const { height } = chart;
    const ctx = chart.ctx;

    ctx.restore();
    const fontSize = (height / 6).toFixed(2);
    ctx.font = `${fontSize}px monospace`;
    ctx.fillStyle = "#00ff9f";
    ctx.textBaseline = "middle";

    const text = chart.config.data.datasets[0].data[0] + "%";
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
};

export default function ChartComponent({ score }) {
  const data = {
    labels: ["Privacy Score", "Remaining"],
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: ["#00ff9f", "#111"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: { display: false }
    },
    animation: {
      animateRotate: true,
      duration: 1200
    }
  };

  return (
    <div style={{ width: "220px", margin: "20px auto" }}>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
}
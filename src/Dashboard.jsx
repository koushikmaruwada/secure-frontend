import { useState, useEffect } from "react";
import QueryForm from "./QueryForm";
import ResultCard from "./ResultCard";
import Logs from "./Logs";

export default function Dashboard() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff9f";
      ctx.font = fontSize + "px monospace";

      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      });
    }

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div style={{ position: "relative" }}>
      
      {/* MATRIX BACKGROUND */}
      <canvas
        id="matrix"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* UI CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "#000",
          color: "#00ff9f",
          minHeight: "100vh",
          padding: "40px",
          fontFamily: "monospace",
        }}
      >
        <h1>⚡ SECURE AI TERMINAL</h1>

        <QueryForm setResult={setResult} />

        {result && <ResultCard result={result} />}

        <Logs />
      </div>
    </div>
  );
}
import { useState, useEffect } from "react";
import axios from "axios";
import QueryForm from "./QueryForm";
import ResultCard from "./ResultCard";
import Logs from "./Logs";

export default function Dashboard() {
  const [result, setResult] = useState(null);

  // 🔥 MATRIX BACKGROUND
  useEffect(() => {
    const canvas = document.getElementById("matrix");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    const drops = Array(columns).fill(1);

    let animation;

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

      animation = requestAnimationFrame(draw);
    }

    draw();

    return () => cancelAnimationFrame(animation);
  }, []);

  // 🔥 FILE UPLOAD
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(
        "https://secure-backend-3iuz.onrender.com/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("✅ Uploaded");
    } catch {
      alert("❌ Upload failed");
    }
  };

  return (
    <>
      {/* 🔥 MATRIX CANVAS */}
      <canvas
        id="matrix"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* 🔥 UI ABOVE MATRIX */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "#00ff9f",
          backgroundColor: "rgba(0,0,0,0.85)",
          minHeight: "100vh",
          padding: "40px",
          fontFamily: "monospace",
        }}
      >
        <h1 style={{ textShadow: "0 0 10px #00ff9f" }}>
          ⚡ SECURE AI TERMINAL
        </h1>

        {/* Upload */}
        <div style={{ marginBottom: "20px" }}>
          <h3>📂 Upload Dataset</h3>
          <input type="file" onChange={handleFileUpload} />
        </div>

        {/* Query */}
        <QueryForm setResult={setResult} />

        {/* Result */}
        {result && <ResultCard result={result} />}

        {/* Logs */}
        <Logs />
      </div>
    </>
  );
}
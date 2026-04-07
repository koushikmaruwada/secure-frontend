import { useState, useEffect } from "react";
import axios from "axios";
import QueryForm from "./QueryForm";
import ResultCard from "./ResultCard";
import Logs from "./Logs";

export default function Dashboard() {
  const [result, setResult] = useState(null);

  // 🔥 File Upload Handler
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(
        "https://secure-backend-3iuz.onrender.com/upload",
        formData
      );

      alert("✅ File uploaded & encrypted!");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#00ff9f",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "monospace",
      }}
    >
      <h1>⚡ SECURE AI TERMINAL</h1>

      {/* 🔥 FILE UPLOAD */}
      <div style={{ marginBottom: "20px" }}>
        <h3>📂 Upload Dataset</h3>
        <input type="file" onChange={handleFileUpload} />
      </div>

      {/* 🔍 QUERY */}
      <QueryForm setResult={setResult} />

      {/* 📊 RESULT */}
      {result && <ResultCard result={result} />}

      {/* ⛓️ LOGS */}
      <Logs />
    </div>
  );
}
import { useEffect, useState } from "react";
import axios from "axios";

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
  const fetchLogs = () => {
    axios.get("https://secure-backend.onrender.com/logs")
      .then(res => setLogs(res.data));
  };

  fetchLogs();
  const interval = setInterval(fetchLogs, 2000); // 🔥 auto refresh

  return () => clearInterval(interval);
}, []);
}
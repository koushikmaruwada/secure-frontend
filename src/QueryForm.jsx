import { useState } from "react";
import axios from "axios";

export default function QueryForm({ setResult }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("https://secure-backend.onrender.com/query", { query });
      setResult(res.data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter user1 / user2"
        />
        <button type="submit">Search</button>
      </form>

      {/* ✅ Loading message INSIDE return */}
      {loading && (
        <p style={{ color: "#00ff9f", marginTop: "10px" }}>
          ⏳ Processing...
        </p>
      )}
    </div>
  );
}
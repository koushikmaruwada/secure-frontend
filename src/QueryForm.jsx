import { useState } from "react";
import axios from "axios";

export default function QueryForm({ setResult }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 THIS IS WHERE YOU ADD TRY-CATCH
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://secure-backend-3iuz.onrender.com/query",
        { query }
      );

      setResult(res.data); // ✅ update UI
    } catch (err) {
      console.error(err);
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter query"
        />
        <button type="submit">Search</button>
      </form>

      {loading && (
        <p style={{ color: "#00ff9f", marginTop: "10px" }}>
          ⏳ Processing...
        </p>
      )}
    </div>
  );
}
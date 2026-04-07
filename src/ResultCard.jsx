export default function ResultCard({ result }) {
  return (
    <div style={styles.card}>
      <h2>🔍 Query Result</h2>

      {/* SAFE RENDER */}
{result?.data && (
  Array.isArray(result.data) ? (
    result.data.map((item, index) => (
      <div key={index}>
        {typeof item === "object" ? (
          Object.entries(item).map(([k, v]) => (
            <p key={k}><strong>{k}:</strong> {v}</p>
          ))
        ) : (
          <p>{item}</p>
        )}
      </div>
    ))
  ) : (
    <p>{result.data}</p>
  )
)}

      <p><strong>Privacy Score:</strong> {result.privacy_score}%</p>
      <p><strong>Risk:</strong> {result.risk}</p>
    </div>
  );
}

const styles = {
  card: {
    marginTop: "30px",
    padding: "25px",
    backgroundColor: "#1e293b",
    borderRadius: "12px",
    border: "1px solid #00ff9f",
    boxShadow: "0 0 10px #00ff9f",
  },
};
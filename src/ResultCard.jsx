import ChartComponent from "./ChartComponent";

export default function ResultCard({ result }) {
  return (
    <div style={styles.card}>
      <h2>🔍 Query Result</h2>

      {/* 🔥 Handle multiple results */}
      {Array.isArray(result.data) ? (
        result.data.map((item, index) => (
          <p key={index}>
            <strong>Result {index + 1}:</strong> {item}
          </p>
        ))
      ) : (
        <p>
          <strong>Data:</strong> {result.data}
        </p>
      )}

      <p>
        <strong>Privacy Score:</strong> {result.privacy_score}%
      </p>

      <ChartComponent score={result.privacy_score} />

      <p>
        <strong>Risk:</strong> {result.risk}
      </p>
    </div>
  );
}

const styles = {
  card: {
    marginTop: "30px",
    padding: "25px",
    backgroundColor: "#1e293b",
    borderRadius: "12px",

    // 🔥 ADD THESE HERE
    border: "1px solid #00ff9f",
    boxShadow: "0 0 10px #00ff9f",
    boxShadow: "0 0 20px #00ff9f"
  },
};
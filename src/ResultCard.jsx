import ChartComponent from "./ChartComponent";

export default function ResultCard({ result }) {
  return (
    <div style={styles.card}>
      <h2>🔍 Query Result</h2>

      <p><strong>Data:</strong> {result.data}</p>

      <p><strong>Privacy Score:</strong> {result.privacy_score}%</p>

      <ChartComponent score={result.privacy_score} />

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
  },
};
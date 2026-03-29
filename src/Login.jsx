import { useState } from "react";
import axios from "axios";

export default function Login({ setLoggedIn }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(
        "https://secure-backend-3iuz.onrender.com/login",
        {
          username: user,   // ✅ IMPORTANT
          password: pass,   // ✅ IMPORTANT
        }
      );

      console.log("Response:", res.data); // 🔍 debug

      if (res.data.status === "success") {
        setLoggedIn(true);   // ✅ THIS OPENS DASHBOARD
      } else {
        alert("Login failed");
      }

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div style={{
      background: "black",
      color: "#00ff9f",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "monospace"
    }}>
      <h2>🔐 LOGIN</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUser(e.target.value)}
        style={{ margin: "10px", padding: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
        style={{ margin: "10px", padding: "10px" }}
      />

      <button onClick={login}>Login</button>
    </div>
  );
}
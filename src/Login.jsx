import { useState } from "react";
import axios from "axios";

export default function Login({ setLoggedIn }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const login = async () => {
    try {
      const res = axios.post("https://secure-backend-3iuz.onrender.com/login", {
        username: user,
        password: pass,
      });

      if (res.data.status === "success") {
        setLoggedIn(true);
      }
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>🔐 Login</h2>
      <input placeholder="Username" onChange={(e) => setUser(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPass(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}
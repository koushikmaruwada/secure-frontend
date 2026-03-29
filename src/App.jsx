import { useState } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn
    ? <Dashboard />
    : <Login setLoggedIn={setLoggedIn} />;
}
export default App;
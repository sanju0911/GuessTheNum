import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import styles from "./css/App.module.css"; // Import your CSS module

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = (email, password) => {
    console.log("Logging in with", email, password);
  };

  const handleRegister = (name, email, password) => {
    console.log("Registering with", name, email, password);
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.topButton}>
        <button onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Go to Login" : "Go to Register"}
        </button>
      </div>
      {isRegistering ? (
        <Register onRegister={handleRegister} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;

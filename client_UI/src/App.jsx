import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Cookies from "js-cookie";
import Login from "./components/login_register_components/Login";
import Register from "./components/login_register_components/Register";
import UserProfile from "./UserProfile";

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const LoginWrapper = () => {
    const navigate = useNavigate();

    return (
      <Login
        onGoToRegister={() => setIsRegistering(true)}
        onLoginSuccess={(email) => {
          Cookies.remove("email");
          Cookies.remove("userName");

          Cookies.set("email", email, { expires: 7 });
          setUserEmail(email);
          navigate("/profile");
        }}
      />
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isRegistering ? (
              <Register onGoToLogin={() => setIsRegistering(false)} />
            ) : (
              <LoginWrapper />
            )
          }
        />
        <Route path="/profile" element={<UserProfile email={userEmail} />} />
      </Routes>
    </Router>
  );
};

export default App;

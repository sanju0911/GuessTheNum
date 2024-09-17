import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import HighScore from "./components/ScoresComponents/HighScore";
import YourScore from "./components/ScoresComponents/YourScore";
import styles from "./css/UserProfile.module.css";
import NumberInputBox from "./components/game_components/NumberInputBox";

const UserProfile = ({ email }) => {
  const storedEmail = email || Cookies.get("email");

  const [userName, setUserName] = useState(Cookies.get("userName") || "");
  const [loading, setLoading] = useState(!Cookies.get("userName"));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!storedEmail) {
      setError("Email is required.");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/users/profile?email=${encodeURIComponent(
            storedEmail
          )}`
        );
        const data = await response.json();
        if (response.ok) {
          setUserName(data.name);

          Cookies.set("userName", data.name, { expires: 7 });
          Cookies.set("email", storedEmail, { expires: 7 });
        } else {
          setError(data.message || "Failed to fetch user data");
        }
      } catch (err) {
        setError("An error occurred while fetching user data");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (!userName) {
      fetchUserData();
    }
  }, [storedEmail, userName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.greeting}>Hiii, {userName || "User"}!</h1>
        <HighScore />
      </div>
      <div className={styles.scoreSection}>
        <YourScore email={storedEmail} />

        <NumberInputBox />
      </div>
    </div>
  );
};

export default UserProfile;

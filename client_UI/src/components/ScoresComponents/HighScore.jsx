// src/components/HighScore.jsx
import React, { useEffect, useState } from "react";

const HighScore = () => {
  const [highScore, setHighScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHighScore = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/users/highScores"
        );
        const data = await response.json();
        if (response.ok) {
          setHighScore(data.score); // Assume data contains highScore
        } else {
          setError(data.message || "Failed to fetch high score");
        }
      } catch (err) {
        setError("An error occurred while fetching high score");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHighScore();
  }, []);

  if (loading) {
    return <div>Loading high score...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ position: "absolute", top: "10px", right: "10px" }}>
      <h2>High Score: {highScore || "N/A"}</h2>
    </div>
  );
};

export default HighScore;

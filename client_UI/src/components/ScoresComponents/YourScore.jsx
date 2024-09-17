import React, { useEffect, useState } from "react";

const YourScore = ({ email }) => {
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserScore = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/users/getscore?email=${encodeURIComponent(
            email
          )}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch user score");
        }

        const data = await response.json();
        setScore(data.score);
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserScore();
  }, [email]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Your Score: {score !== null ? score : "No score available"}</h2>
    </div>
  );
};

export default YourScore;

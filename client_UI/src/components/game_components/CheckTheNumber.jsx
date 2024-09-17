import React from "react";
import styles from "../../css/CheckTheNumber.module.css";

const CheckTheNumber = ({ userNumber, randomNumber }) => {
  let message = "";

  if (userNumber === "") {
    message = "Please enter a number.";
  } else if (userNumber < randomNumber) {
    message = "You have gone low. Try a higher number!";
  } else if (userNumber > randomNumber) {
    message = "You have gone high. Try a lower number!";
  } else {
    message = "Hurray! It's perfect! You got the point.";
  }

  return <div className={styles.message}>{message}</div>;
};

export default CheckTheNumber;

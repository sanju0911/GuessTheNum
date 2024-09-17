
import React, { useState } from "react";
import styles from "../../css/NumberInputBox.module.css";
import CheckTheNumber from "./CheckTheNumber"; // Import the subcomponent

const NumberInputBox = () => {
  const [value, setValue] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

  const handleChange = (e) => {
   
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
    }
  };

  const handleCheck = () => {
    if (value === "") {
      alert("Please enter a number");
      return;
    }


    const generatedNumber = generateRandomNumber();
    setRandomNumber(generatedNumber);

    if (parseInt(value, 10) === generatedNumber) {
      alert("Perfect!");
    } else {
      setValue(""); 
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor="numberInput" className={styles.label}>
        Enter Number:
      </label>
      <input
        id="numberInput"
        type="text"
        value={value}
        onChange={handleChange}
        className={styles.input}
        placeholder="Only numbers allowed"
      />
      <button onClick={handleCheck} className={styles.button}>
        Check
      </button>
      {randomNumber !== null && (
        <CheckTheNumber
          userNumber={parseInt(value, 10)}
          randomNumber={randomNumber}
        />
      )}
    </div>
  );
};

export default NumberInputBox;

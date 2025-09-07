import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PasscodePage.css";

const PasscodePage = () => {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(passcode)
    if (String(passcode).trim() === "4432") {
      navigate("/puzzle"); // redirect to puzzle page
    } else {
      setError("Incorrect passcode. Try again 💔");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Please enter the passcode</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter passcode"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />
          <p className="hint">Hint: The passcode is a 4 digit number</p>
          {error && <p className="error">{error}</p>}
          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
};

export default PasscodePage;

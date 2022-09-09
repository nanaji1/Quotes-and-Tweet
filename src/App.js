import React, { useState, useEffect } from "react";

// import React from "react";
import Quotes from "./Quotes";
import "./App.css";

function App() {
  // const [concept, setConcept] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const themeChangeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="flex-end">
        <label className="switch">
          <input type="checkbox" onChange={themeChangeHandler} />
          <span className="slider round"> </span>
        </label>
      </div>
      <div>
        <Quotes />
      </div>
    </div>
  );
}
export default App;

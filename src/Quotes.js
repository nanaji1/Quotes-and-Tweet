import React, { useState, useEffect } from "react";
import "./App.css";
function Quotes() {
  const [quotes, setquotes] = useState("");
  const [color, setColor] = useState();

  let colors = [
    "#52e213",
    "#f44336",
    "#826dbd",
    "#9f3939",
    "#674ea7",
    "#d9ead3",
    "#efbbbb",
    "#8a79b9",
    "#fd48a7",
    "#e42424",
    "#085eac",
    "#ce7e00",
  ];

  useEffect(() => {
    getQuote();
  }, []);
  function getQuote() {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setquotes(data[Math.ceil(Math.random() * data.length - 1)]);
        setColor(colors[Math.ceil(Math.random() * colors.length - 1)]);
      });
  }

  return (
    <div
      className="App"
      style={{
        color: colors,
      }}
    >
      <div className="quote">
        <p style={{ color: `${color}` }}>{quotes.text}</p>
        <p className="author" style={{ color: `${color}` }}>
          - {quotes.author}
        </p>
        <div className="btnContainer">
          <button
            className="btn"
            onClick={getQuote}
            style={{ backgroundColor: `${color}` }}
          >
            New Quote
          </button>
          <a
            href={encodeURI(
              `https://twitter.com/intent/tweet?text=
              ${quotes.text} -${quotes.author}`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ backgroundColor: `${color}` }}
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
}
export default Quotes;

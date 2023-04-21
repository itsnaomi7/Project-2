import './style.css';
// import Player from "./component/Player";
import Home from "./pages/Home";
//import data from "./data";
import React, { useEffect, useState } from "react";

const App = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuote(data);
      });
  }, []);
  

  const randomNum = () => Math.floor(Math.random() * quote.length);
  const [quoteIndex, setQuoteIndex] = useState(randomNum);

  const handleClick = (e) => {
    setQuoteIndex(randomNum());
  };

  if (!quote.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container" id="quote-box">
      <div className="quote-box">
        <h1 className="quote-other" id="text">
          {quote[quoteIndex].text}
        </h1>
      </div>
      <div className="btnDiv">
        <button id="new-quote-new" onClick={handleClick}>
          Be Inspired
        </button>
        <p id="author">~{quote[quoteIndex].author || "Anon"}</p>
      </div>
    </div>
  );
};

export default App;


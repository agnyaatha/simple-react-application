import "./RandomQuote.css";
import axios from "axios";
import React from "react";

function RandomQuote() {
  const [quote, setQuote] = React.useState({ content: "", author: "" });
  const [randomColor, setRandomColor] = React.useState("black");

  React.useEffect(() => {
    generateNewQuote();
  }, []);

  const generateNewQuote = async function () {
    axios
      .get("https://api.quotable.io/random")
      .then((result) => {
        const { content, author } = result.data;
        setQuote({
          content: content,
          author: author,
        });
        getRandomColor();
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const getRandomColor = () => {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
    }
    setRandomColor(color);
    document.documentElement.style.setProperty("--random-color", randomColor);
  };

  return (
    <div className="RandomQuote" id="quote-box">
      <div id="text">
        <div className="text">
          <i className="fa fa-quote-left"></i>
          <span> {quote.content}</span>
        </div>
      </div>
      <div id="author">
        <p> - {quote.author}</p>
      </div>
      <div className="bottom-buttons">
        <a
          id="tweet-quote"
          className="buttons"
          href="twitter.com/intent/tweet"
          target="_blank"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <button id="new-quote" className="buttons" onClick={generateNewQuote}>
          New quote
        </button>
      </div>
    </div>
  );
}

export default RandomQuote;

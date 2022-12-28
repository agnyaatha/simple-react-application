import React from "react";
import RandomQuote from "./RandomQuote";
import DrumMachine from "./DrumMachine";
import MarkdownPreviewer from "./MarkdownPreviewer";
import BasicCalculator from "./BasicCalculator";
import PomodoreTimer from "./PomodoreTimer";
import "./MainPage.css"

function MainPage() {
  const [application, setApplication] = React.useState("");
  const [applicationName, setApplicationName] = React.useState("")

  const appButtons = (
    <div id="application-selector">
      <button
        className="application-picker"
        onClick={() => setApplication(handleButtonPress("random-quote"))}
      >
        Random Quote
      </button>
      <button
        className="application-picker"
        onClick={() => setApplication(handleButtonPress("drum-machine"))}
      >
        Drum Machine
      </button>
      <button
        className="application-picker"
        onClick={() => setApplication(handleButtonPress("basic-calculator"))}
      >
        Basic Calculator
      </button>
      <button
        className="application-picker"
        onClick={() => setApplication(handleButtonPress("markdown-previewer"))}
      >
        Markdown Previewer
      </button>
      <button
        className="application-picker"
        onClick={() => setApplication(handleButtonPress("pomodore-timer"))}
      >
        Pomodore Timer
      </button>
    </div>
  );

  const handleButtonPress = (value) => {
    const main = document.getElementById("application-selector");
    main.remove();
    switch (value) {
      case "random-quote": {
        // document.documentElement.style.setProperty("--random-color", randomColor);
        setApplicationName("random-quote-application-wrapper");
        return <RandomQuote />;
      }
      case "drum-machine": {
        document.documentElement.style.setProperty("--random-color", "gray");
        setApplicationName("drum-machine-application-wrapper");
        return <DrumMachine />;
      }
      case "basic-calculator": {
        document.documentElement.style.setProperty("--random-color", " rgb(157, 184, 157)");
        setApplicationName("basic-calculator-application-wrapper");
        return <BasicCalculator />;
      }
      case "markdown-previewer": {
        document.documentElement.style.setProperty("--random-color", "#87b5b5");
        setApplicationName("markdown-previewer-application-wrapper");
        return <MarkdownPreviewer />;
      }
      case "pomodore-timer": {
        document.documentElement.style.setProperty("--random-color", "rgb(0, 160, 107)");
        setApplicationName("pomodore-timer-application-wrapper");
        return <PomodoreTimer />;
      }
      default: {
        break;
      }
    }
  };

  return (
    <div className="main-page" id="main-page">
      {appButtons}
      <div className={applicationName + " application-wrapper"}>
      {application}
      </div>
      
    </div>
  );
}

export default MainPage;

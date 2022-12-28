import React from "react";
import "./PomodoreTimer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faPause,
  faPlay,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";

function PomodoreTimer() {
  const [breakLength, setBreakLength] = React.useState(5);
  const [sessionLength, setSessionkLength] = React.useState(25);
  const [session, setSession] = React.useState(1500);
  const [toggle, setToggle] = React.useState(false);
  const [isBreak, setIsBreak] = React.useState(false);

  React.useEffect(() => {
    setSession(sessionLength * 60);
  }, [sessionLength]);


    const beep = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  


  const handleIncrement = (e) => {
    switch (e) {
      case "break": {
        if (breakLength < 60) {
          setBreakLength(breakLength + 1);
        }
        break;
      }
      case "session": {
        if (sessionLength < 60) {
          setSessionkLength(sessionLength + 1);
          setSession(session * 60);
        }
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleDecrement = (e) => {
    switch (e) {
      case "break": {
        if (breakLength > 0) {
          setBreakLength(breakLength - 1);
        }
        break;
      }
      case "session": {
        if (sessionLength > 0) {
          setSessionkLength(sessionLength - 1);
          setSession(session * 60);
        }
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSession = () => {
    clearTimeout(countdown);
    setToggle(!toggle);
  };
let displayColor = document.getElementById("display-container");
  const countdown = setTimeout(() => {
    if (session && toggle) {
      if(session < 10 ){
        beep.play();
        displayColor.style.color = "red";
      }
      setSession(session - 1);
    }else if(session === 0 && !isBreak){
      setIsBreak(true);
      setSession(breakLength * 60);
      displayColor.style.color = "black";
    }else if(session === 0 && isBreak){
      setIsBreak(false);
      setSession(sessionLength*60);
      setToggle(false);
        displayColor.style.color = "black";
    }
  }, 1000);

  const timeFormatter = () => {
    const min = Math.floor(session / 60);
    const sec = session - min * 60;
    const formattedMin = min < 10 ? "0" + min : min;
    const formattedSec = sec < 10 ? "0" + sec : sec;
    return formattedMin + ":" + formattedSec;
  };

  return (
    <div className="pomodore-timer">
      <div><h3>Pomodore Clock</h3></div>
      <div className="timer-editor">
        <div className="breakLabel">
          <div id="break-label">
            <span>Break length</span>
          </div>
          <div className="buttons-values">
            <button
              id="break-decrement"
              onClick={() => handleDecrement("break")}
            >
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
            <span id="break-length">{breakLength}</span>
            <button
              id="break-increment"
              onClick={() => handleIncrement("break")}
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
        </div>
        <div className="sessionLabel">
          <div id="session-label">
            <span>Session length</span>
          </div>
          <div className="buttons-values">
            <button
              id="session-decrement"
              onClick={() => handleDecrement("session")}
            >
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
            <span id="session-length">{sessionLength}</span>
            <button
              id="session-increment"
              onClick={() => handleIncrement("session")}
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
        </div>
      </div>
      <div id="display-container">
        <div>
          <span id="timer_label">{isBreak ? "Break" : "Session"}</span>
        </div>
        <div>
          <span id="time-left">{timeFormatter()}</span>
        </div>
      </div>
      <div className="timer-controls">
        <button
          id="start_stop"
          onClick={() => {
            handleSession();
          }}
        >
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button
          id="reset"
          onClick={() => {
            setToggle(false);
            setBreakLength(5);
            setSessionkLength(25);
            setSession(sessionLength * 60);
            setIsBreak(false);
          }}
        >
          <FontAwesomeIcon icon={faRefresh} />
        </button>
      </div>
    </div>
  );
}

export default PomodoreTimer;

import React from "react";
import "./DrumMachine.css";
import { AUDIOCLIPS1, AUDIOCLIPS2 } from "./DrumMachineAudio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";

function DrumMachine() {
  const DRUMKEYS = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  const [volume, setVolume] = React.useState("50");
  const [displayValue, setDisplayValue] = React.useState("");
  const [powerButton, setPowerButton] = React.useState(false);
  const [bankButton, setBankButton] = React.useState(false);

  const keyPads1 = DRUMKEYS.map((key, index) => {
    return {
      drumKey: key,
      source: AUDIOCLIPS1[index].src,
      name: AUDIOCLIPS1[index].name,
    };
  });

  const keyPads2 = DRUMKEYS.map((key, index) => {
    return {
      drumKey: key,
      source: AUDIOCLIPS2[index].src,
      name: AUDIOCLIPS2[index].name,
    };
  });

  const handleAudioPlay = (source, volume) => {
    var clip = new Audio(source);
    clip.volume = volume;
    clip.play();
  };

  const buttonWrapper = (item) => {
    return (
      <button
        className="buttons"
        id={item.name}
        onClick={() => {
          if(powerButton){handleAudioPlay(item.source, volume/100);
          setDisplayValue(item.name);}
        }}
      >
        <audio id={item.drumKey} src={item.source}></audio>
        {item.drumKey}
      </button>
    );
  };
  //  console.log(document.getElementById("power-toggle"))
  return (
    <div id="drum-machine">
      {/* <div id='display'></div> */}
      <div className="drum-pad">
        {bankButton ? keyPads1.map((item) => buttonWrapper(item)) : keyPads2.map((item) => buttonWrapper(item))}
      </div>
      <div className="machine-controls">
        <div className="machine-logo">
          <FontAwesomeIcon icon={faAnchor} /> FCC
        </div>
        <div className="power-controls">
          <p>Power</p>
          <div className="toggler-wrapper">
            <label className="toggle">
              <input
                type="checkbox"
                id="power-toggle"
                checked={powerButton}
                onChange={() => {
                  setPowerButton(!powerButton);
                  if(!powerButton){
                    setDisplayValue("POWER ON");
                  }else{
                    setDisplayValue("POWER OFF");
                  }
                }}
              />
              <span className="switch"></span>
            </label>
          </div>
        </div>
        <div className="info-screen">
          <p className="info-value">{displayValue}</p>
        </div>
        <div className="volume-slider">
          <div className="slider">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              id="vol-range"
              value={volume}
              onChange={(e) => {
                setVolume(e.target.value);
              }}
            />
            <span className="slider-value">{volume}</span>
          </div>
        </div>
        <div className="bank-controls">
          <p>Bank</p>
          <div className="toggler-wrapper">
            <label className="toggle">
              <input
                type="checkbox"
                id="bank-toggle"
                checked={bankButton}
                onChange={() => {
                  setBankButton(!bankButton);
                  if(bankButton){
                    setDisplayValue("GUITAR");
                  }else{
                    setDisplayValue("DRUM");
                  }
                }}
              />
              <span className="switch"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrumMachine;

import React from "react";
import "./MarkdownPreviewer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnchor,
  faMaximize,
  faMinimize,
} from "@fortawesome/free-solid-svg-icons";
import Markdown from "react-markdown-it";

const MarkdownPreviewer = () => {
  const [inputValue, setInputValue] = React.useState("# Hello world!");
  const [isEditor, setIsEditor] = React.useState(true);
  const [isPreviewer, setIsPreviewer] = React.useState(true);
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="markdownPreviwer">
      {isEditor && (
        <div className="editor-wrapper">
          <div className="editor-toolbar">
            <div>
              <FontAwesomeIcon icon={faAnchor} />
              <span> Editor</span>
            </div>
            <div
              className="maximize"
              onClick={() => {
                if (isPreviewer === true) {
                  document
                    .getElementById("editor")
                    .style.setProperty("height", "100vh");
                } else {
                  document
                    .getElementById("editor")
                    .style.setProperty("height", "100%");
                }
                setIsPreviewer(!isPreviewer);
              }}
            >
              <FontAwesomeIcon icon={isPreviewer ? faMaximize : faMinimize} />
            </div>
          </div>
          <textarea
            id="editor"
            placeholder="# Hello World!"
            onChange={(e) => handleOnChange(e)}
          ></textarea>
        </div>
      )}
      {isPreviewer && (
        <div className="preview-wrapper">
          <div className="preview-toolbar">
            <div>
              <FontAwesomeIcon icon={faAnchor} />
              <span> Previewer</span>
            </div>
            <div
              className="maximize"
              onClick={() => {
                if (isEditor === true) {
                  document
                    .getElementById("preview")
                    .style.setProperty("height", "100vh");
                } else {
                  document
                    .getElementById("preview")
                    .style.setProperty("height", "100%");
                }
                setIsEditor(!isEditor);
              }}
            >
              <FontAwesomeIcon icon={isEditor ? faMaximize : faMinimize} />
            </div>
          </div>
          <div id="preview">
            <div>
              <Markdown source={inputValue} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarkdownPreviewer;

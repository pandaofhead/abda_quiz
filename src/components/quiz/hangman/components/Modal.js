import React from "react";
import { wordsHint as getRandomHint} from "../Hangman";
export function RuleModal({ setRuleOpenProp}) {
  return (
    <div
      className="popup-container"
      style={RuleModal !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>Rule</h2>
        <h3>
          Guess the names of famous American singers.
        </h3>
        <p>
          You've only got 6 shots
        </p>
        <button
          onClick={() => {
            setRuleOpenProp(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export function HintModal({ setHintOpenProp }) {
  return (
    <div
      className="popup-container"
      style={HintModal !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>Hint</h2>
        <h3>
        {getRandomHint()}
        </h3>
        <button
          onClick={() => {
            setHintOpenProp(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

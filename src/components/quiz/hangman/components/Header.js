import React, { useState } from "react";
import { RuleModal, HintModal } from "./Modal";

const Header = () => {
  const [ruleOpen, setRuleOpen] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);

  return (
    <>
      <h1>Hangman</h1>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            setRuleOpen(true);
          }}
        >
          Rule
        </button>
        {ruleOpen && <RuleModal setRuleOpenProp={setRuleOpen} />}

        <button
          className="btn"
          onClick={() => {
            setHintOpen(true);
          }}
        >
          Hint
        </button>
        {hintOpen && <HintModal setHintOpenProp={setHintOpen} />}
      </div>

      <h2>Find the hidden word - Enter a letter</h2>
    </>
  );
};

export default Header;

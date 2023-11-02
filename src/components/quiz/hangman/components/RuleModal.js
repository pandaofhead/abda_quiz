import React from "react";

const RuleModal = ({closeRule}) => {
  return (
    <div className="popup-container" style={RuleModal!==''? {display:'flex'}:{}}>
      <div className="popup">
        <h2>Rule</h2>
        <button onClick={()=>closeRule(true)}>Close</button>
      </div>
    </div>
  );
};

export default RuleModal;

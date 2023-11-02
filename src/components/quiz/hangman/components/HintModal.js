import React from "react";

const HintModal = () => {
  return (
    <div className="popup-container" style={HintModal!==''? {display:'flex'}:{}}>
      <div className="popup">
        <h2>Hint</h2>
        <button>Close</button>
      </div>
    </div>
  );
};

export default HintModal;

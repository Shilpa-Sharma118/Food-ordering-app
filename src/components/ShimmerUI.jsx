import React from "react";
import "../App.scss";

function ShimmerUI() {
  return (
    <div className="shimmer-ui">
      {Array(10)
        .fill("")
        .map((e, idx) => (
          <div key={idx} className="shimmer-card"></div>
        ))}
    </div>
  );
}

export default ShimmerUI;

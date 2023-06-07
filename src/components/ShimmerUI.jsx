import React from "react";
import "../App.scss";

function ShimmerUI() {
  return (
    <div className="flex gap-3 flex-wrap" data-testid="shimmer">
      {Array(10)
        .fill("")
        .map((e, idx) => (
          <div key={idx} className="h-[300px] w-[200px] bg-gray-300"></div>
        ))}
    </div>
  );
}

export default ShimmerUI;

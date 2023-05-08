import React from "react";
import { Image, Shimmer } from "react-shimmer";
import "../App.scss";

function ShimmerUI() {
  return (
    <div className="shimmer-ui">
      <Image
        src="https://csshint.com/wp-content/uploads/2022/01/Css-Skeleton-Loader-Animation.jpg"
        fallback={<Shimmer width={100} height={100} />}
      />
    </div>
  );
}

export default ShimmerUI;

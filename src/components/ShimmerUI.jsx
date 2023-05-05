import React from "react";
import { Image, Shimmer } from "react-shimmer";

function ShimmerUI() {
  return (
    <div>
      <Image
        src="https://csshint.com/wp-content/uploads/2022/01/Css-Skeleton-Loader-Animation.jpg"
        fallback={<Shimmer width={200} height={400} />}
      />
    </div>
  );
}

export default ShimmerUI;

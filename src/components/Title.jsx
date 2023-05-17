import React from "react";

export const Title = ({ image }) => {
  return (
    <a href="/">
      <img className="h-28" src={image} alt="" />
    </a>
  );
};

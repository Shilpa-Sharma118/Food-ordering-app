import React from "react";

export const Title = ({ image }) => {
  return (
    <a href="/">
      <img data-testid="logo" className="h-28" src={image} alt="Logo Image" />
    </a>
  );
};

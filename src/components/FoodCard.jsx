import React from "react";
import { IMG_CDN_URL } from "../config";

const FoodCard = ({ name, imageId, price }) => {
  return (
    <div className="w-[250] p-2 h-96  border-2 border-orange-950 m-2 bg-teal-50 rounded-lg">
      <h1 className="font-bold">{name}</h1>
      <img src={IMG_CDN_URL + imageId} alt="" className="h-52 w-52"></img>
      <h1>Price : {price / 100}</h1>
    </div>
  );
};

export default FoodCard;

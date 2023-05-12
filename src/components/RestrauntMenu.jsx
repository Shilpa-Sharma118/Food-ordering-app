import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";

const RestrauntMenu = () => {
  const params = useParams(); //const {id} = useParams also works
  const { id } = params;
  const [resDetails, menu] = useRestaurant(id);

  return !resDetails ? (
    <ShimmerUI />
  ) : (
    <div className="menu-details">
      <div>
        <h1>Restaurant id : {id} </h1>
        <h2> {resDetails?.name}</h2>
        <img src={IMG_CDN_URL + resDetails?.cloudinaryImageId} alt="" />
        <h2>Ratings: {resDetails?.avgRating} stars </h2>
      </div>
      <div className="menu-items">
        {menu?.map((item, idx) => {
          return (
            <div key={idx}>
              <p>{item?.card?.card?.title}</p>
              <ul>
                {item?.card?.card?.itemCards?.map((subItem) => {
                  return (
                    <li key={subItem?.card?.info?.id}>
                      {subItem?.card?.info?.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestrauntMenu;

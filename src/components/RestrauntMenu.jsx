import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestrauntMenu = () => {
  const params = useParams(); //const {id} = useParams also works
  const { id } = params;
  const [resDetails, menu] = useRestaurant(id);
  const dispatch = useDispatch();

  const handleAddItem = (itemName) => {
    dispatch(addItem(itemName));
  };

  return !resDetails ? (
    <ShimmerUI />
  ) : (
    <div className="flex gap-5 p-2 m-2">
      <div>
        <h1>Restaurant id : {id} </h1>
        <h2> {resDetails?.name}</h2>
        <img src={IMG_CDN_URL + resDetails?.cloudinaryImageId} alt="" />
        <h2>Ratings: {resDetails?.avgRating} stars </h2>
      </div>
      <div className="border p-2 m-2 bg-teal-50">
        {menu?.map((item, idx) => {
          return (
            <div key={idx}>
              <p className="text-lg font-bold">{item?.card?.card?.title}</p>
              <ul className="p-2 m-2">
                {item?.card?.card?.itemCards?.map((subItem) => {
                  return (
                    <li key={subItem?.card?.info?.id}>
                      {subItem?.card?.info?.name}
                      <button
                        className="p-2 m-2 bg-fuchsia-300 rounded-md"
                        onClick={() => handleAddItem(subItem?.card?.info)}
                      >
                        Add
                      </button>
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

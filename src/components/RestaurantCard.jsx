import { useContext } from "react";
import { IMG_CDN_URL } from "../config";
import userContext from "../utils/userContext";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => {
  const { user } = useContext(userContext);
  return (
    <div className="w-[250] ">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <div className="font-bold text-xl">{name}</div>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      <h5 className="bold">{user.email}</h5>
    </div>
  );
};

export default RestaurantCard;

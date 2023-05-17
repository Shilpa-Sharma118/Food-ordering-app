import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="w-[250]">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <div className="font-bold text-xl">{name}</div>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

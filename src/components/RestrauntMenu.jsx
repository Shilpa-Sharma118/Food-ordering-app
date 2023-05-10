import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import { IMG_CDN_URL } from "../config";

const RestrauntMenu = () => {
  const params = useParams(); //const {id} = useParams also works
  const { id } = params;
  const [resDetails, setResDetails] = useState();
  const [menu, setMenu] = useState();

  //You can use id here if swiggy API works but now as of now I am using the mock API which I have created for one Id. Can do this:
  // const resp = await fetch("https://apimocha.com/restaurantdata/restaurantId=" + id);

  const getRestaurantMenu = async () => {
    const resp = await fetch(
      "https://apimocha.com/restaurantdata/restaurantId=291051"
    );
    const menu = await resp.json();
    setResDetails(menu?.data?.cards[0]?.card?.card?.info);
    const menuItems =
      menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    menuItems.shift();
    setMenu(menuItems);
  };

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  return !resDetails ? (
    <ShimmerUI />
  ) : (
    <div className="menu-details">
      <div>
        <h1>Restaurant id : {id} </h1>
        <h2> Name of restraunt : {resDetails?.name}</h2>
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

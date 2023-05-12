import { useState, useEffect } from "react";
import { RESTAURANT_API_URL } from "../config";

const useRestaurant = (resId) => {
  const [resDetails, setResDetails] = useState();
  const [menu, setMenu] = useState();

  //get Data from API

  //You can use id here if swiggy API works but now as of now I am using the mock API which I have created for one Id. Can do this:
  // const resp = await fetch("https://apimocha.com/restaurantdata/restaurantId=" + resId);

  const getRestaurantMenu = async () => {
    const resp = await fetch(RESTAURANT_API_URL + "restaurantId=291051");
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

  //return restaurant Data which you were using in RestaurantMenu
  return [resDetails, menu];
};

export default useRestaurant;

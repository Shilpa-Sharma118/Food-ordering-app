import { useEffect, useState } from "react";
//import { restrauntData } from "../config.js";
import RestaurantCard from "./RestaurantCard";
import "../App.scss";
import ShimmerUI from "./ShimmerUI.jsx";

const Body = () => {
  let num = 10;
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredRestrauntList, setFilteredRestrauntList] = useState();
  const [restrauntList, setRestrauntList] = useState();
  const [error, setError] = useState();

  //Calling fecth() here directly outside useEffect () is not performant for our APP
  // as it will keep calling the API at every key press button which is unnecessary

  const filterData = (searchTxt, resList) => {
    return resList.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase())
    );
  };

  //Only called once on the component first render
  /* useEffect(() => {
    console.log("Use Effect is called");
  }, []); */

  /*  Call useEffect only when SearchText changes,
  useEffect(() => {
    console.log("Search txt changed");
  }, [searchTxt]); */

  async function getRestraunts() {
    try {
      // try this API for seeing how is error displayed :
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

      const data = await fetch("https://apimocha.com/restaurantdata/example");
      const json = await data.json();
      setRestrauntList(json?.data.cards[2]?.data?.data?.cards);
      setFilteredRestrauntList(json?.data.cards[2]?.data?.data?.cards);
    } catch (error) {
      setError(error);
      console.error("Unable to fetch restraunts List", error);
    }
  }

  useEffect(() => {
    getRestraunts();
  }, []);

  if (error) return <h1> Unable to display Restraunts List!</h1>;

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchTxt}
          onChange={(e) => {
            num = 12;
            setSearchTxt(e.target.value);
            //Using event value as searchTxt will not be setup immediately and would be available in next render
            if (e.target.value.length < 1) {
              setFilteredRestrauntList(restrauntList);
            }
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = filterData(searchTxt, restrauntList);
            setFilteredRestrauntList(filteredList);
          }}
        >
          Search {num}
        </button>
      </div>
      <div className="restraunt-list">
        {!filteredRestrauntList ? (
          <ShimmerUI />
        ) : filteredRestrauntList?.length === 0 ? (
          <h1>
            No restaurant matches your search!! Please try with something
            different!!!
          </h1>
        ) : (
          filteredRestrauntList?.map((singleRestraunt) => {
            return (
              <RestaurantCard
                {...singleRestraunt.data}
                key={singleRestraunt.data.id}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;

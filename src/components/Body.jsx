import { useEffect, useState } from "react";
//import { restrauntData } from "../config.js";
import RestaurantCard from "./RestaurantCard";
import "../App.scss";
import ShimmerUI from "./ShimmerUI.jsx";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { RESTAURANT_API_URL } from "../config";
import useOnline from "../utils/useOnline";

const Body = () => {
  let num = 10;
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredRestrauntList, setFilteredRestrauntList] = useState();
  const [restrauntList, setRestrauntList] = useState();
  const [error, setError] = useState();

  //Calling fecth() here directly outside useEffect () is not performant for our APP
  // as it will keep calling the API at every key press button which is unnecessary

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

      const data = await fetch(RESTAURANT_API_URL + "example");
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

  //Will be called after evry render
  useEffect(() => {
    console.log("Rendered---");
  });

  //if I am offline, then return offline msg
  const online = useOnline();
  if (!online) {
    return <h1>You are Offline..Please check your internet connection....</h1>;
  }

  if (error) return <h1> Unable to display Restraunts List!</h1>;

  return (
    <>
      <div className="search-bar p-5 my-5 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="border-black p-1 border-2 w-96 rounded-lg"
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
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={() => {
            const filteredList = filterData(searchTxt, restrauntList);
            setFilteredRestrauntList(filteredList);
          }}
        >
          Search {num}
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {!restrauntList ? (
          <ShimmerUI />
        ) : filteredRestrauntList?.length === 0 ? (
          <h1>
            No restaurant matches your search!! Please try with something
            different!!!
          </h1>
        ) : (
          filteredRestrauntList?.map((singleRestraunt) => {
            return (
              <div
                className="p-2 h-96  border-2 border-orange-950 m-2"
                key={singleRestraunt.data.id}
              >
                <Link to={"/restaurant/" + singleRestraunt.data.id}>
                  <RestaurantCard {...singleRestraunt.data} />
                </Link>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;

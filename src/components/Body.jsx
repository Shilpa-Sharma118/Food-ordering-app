import { useState } from "react";
import { restrauntData } from "../config.js";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  let num = 10;
  const [searchTxt, setSearchTxt] = useState("KFC");
  const [restrauntList, setRestrauntList] = useState(restrauntData);

  const filterData = (searchTxt, resList) => {
    return resList.filter((restaurant) =>
      restaurant.data.name.includes(searchTxt)
    );
  };

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
            console.log("target value is", e.target.value);
            searchTxt == "" || searchTxt.length < 1 || searchTxt == null
              ? setRestrauntList(restrauntData)
              : setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = filterData(searchTxt, restrauntList);
            setRestrauntList(filteredList);
          }}
        >
          Search {num}
        </button>
      </div>
      <div className="restraunt-list">
        {restrauntList.map((singleRestraunt) => {
          return (
            <RestaurantCard
              {...singleRestraunt.data}
              key={singleRestraunt.data.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;

import { useEffect, useState, useContext } from "react";
//import { restrauntData } from "../config.js";
import RestaurantCard, { promotedRestaurant } from "./RestaurantCard";
import "../App.scss";
import ShimmerUI from "./ShimmerUI.jsx";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { RESTAURANT_API_URL } from "../config";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";

const Body = () => {
  let num = 10;
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredRestrauntList, setFilteredRestrauntList] = useState();
  const [restrauntList, setRestrauntList] = useState();
  const [error, setError] = useState("");
  const { user, setUser } = useContext(userContext);
  const PromotedRestaurantCard = promotedRestaurant(RestaurantCard);

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

      //This data is a readable stream
      const data = await fetch(RESTAURANT_API_URL + "example");
      //This readable strem is converted to .json() here
      const json = await data.json();
      setRestrauntList(json?.data.cards[2]?.data?.data?.cards);
      console.log("cards look like", json?.data.cards[2]?.data?.data?.cards);
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
    <form>
      <label>
        Enter the details
        <input
          id="details"
          type="text"
          className="border-black p-1 border-2 w-96 rounded-lg"
          aria-describedby="Please enter details for chat agent"
          tabIndex="1"
        ></input>
      </label>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        type="Submit"
        aria-label="Submit Form"
        tabIndex="2"
        onClick={(e) => {
          e.preventDefault();
          console.log("button is pressed---");
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            console.log("button is pressed---");
          }
        }}
      >
        Submit
      </button>
    </form>

    // <>
    //   <div
    //     className="p-5 my-5 flex justify-center"
    //     aria-label="Search Restaurants"
    //   >
    //     <input
    //       type="text"
    //       placeholder="Search"
    //       className="border-black p-1 border-2 w-96 rounded-lg"
    //       value={searchTxt}
    //       onChange={(e) => {
    //         num = 12;
    //         setSearchTxt(e.target.value);
    //Using event value as searchTxt will not be setup immediately and would be available in next render
    //         if (e.target.value.length < 1) {
    //           setFilteredRestrauntList(restrauntList);
    //         }
    //       }}
    //       aria-label="Type restautant name"
    //     />

    //     <button
    //       data-testid="search-btn"
    //       className="p-2 m-2 bg-black text-white rounded-lg"
    //       onClick={() => {
    //         const filteredList = filterData(searchTxt, restrauntList);
    //         setFilteredRestrauntList(filteredList);
    //       }}
    //       aria-label="Search restautant"
    //     >
    //       Search {num}
    //     </button>
    //     <input
    //       type="text"
    //       value={user.name}
    //       className="border-black p-1 border-2 w-96 rounded-lg"
    //       onChange={(e) =>
    //         setUser({ name: e.target.value, email: "newmail@gmail.com" })
    //       }
    //     />
    //     <input
    //       type="text"
    //       value={user.email}
    //       className="border-black p-1 border-2 w-96 rounded-lg"
    //       onChange={(e) => setUser({ ...user, email: e.target.value })}
    //     />
    //   </div>
    //   <div className="flex flex-wrap gap-2">
    //     {!restrauntList ? (
    //       <ShimmerUI />
    //     ) : filteredRestrauntList?.length === 0 ? (
    //       <h1>
    //         No restaurant matches your search!! Please try with something
    //         different!!!
    //       </h1>
    //     ) : (
    //       filteredRestrauntList?.map((singleRestraunt) => {
    //         return (
    //           <div
    //             className="p-2 h-96  border-2 border-orange-950 m-2 bg-teal-50 rounded-lg"
    //             key={singleRestraunt.data.id}
    //             tabIndex="0"
    //           >
    //             <Link
    //               to={"/restaurant/" + singleRestraunt.data.id}
    //               aria-label={
    //                 singleRestraunt.data.promoted
    //                   ? "View Promoted Restaurant"
    //                   : "View Restaurant"
    //               }
    //             >
    //               {singleRestraunt.data.promoted ? (
    //                 <PromotedRestaurantCard {...singleRestraunt.data} />
    //               ) : (
    //                 <RestaurantCard {...singleRestraunt.data} />
    //               )}
    //             </Link>
    //           </div>
    //         );
    //       })
    //     )}
    //   </div>
    // </>
  );
};

export default Body;

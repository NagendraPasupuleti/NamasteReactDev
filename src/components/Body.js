import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { restaurantCards } from "./Constant";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filteredData } from "./utils/Helper";
import useOnline from "./utils/useOnline";

export const Body = () => {
  //const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getAllRestaurants();
  }, []);
  async function getAllRestaurants() {
    const restros = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.876107547163672&lng=77.5957368314266&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await restros?.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const online = useOnline();
  if (!online) {
    return (
      <h2>
        Looks like your seems offline! Make sure your internet connectivity
      </h2>
    );
  }

  // this is known as early return(it won't render the component)
  if (!allRestaurants) return null;

  //if filtered data not matched
  // if (filteredRestaurants?.length === 0) return <h1>No Restaurants found</h1>;
  return allRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div>
        <input
          type="text"
          value={searchText}
          className="search-input"
          placeholder="Search here"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filteredData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restro_cards">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurants found</h1>
        ) : (
          filteredRestaurants.map((res) => {
            return (
              <div key={res.data.id}>
                <Link to={"/restuarant" + res?.data?.id}>
                  <RestaurantCard {...res.data} />
                </Link>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { restaurantCards } from "./Constant";

export const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantCards);
  const [searchText, setSearchText] = useState("");

  function filteredData(searchText, restaurants) {
    const filteredData = restaurants.filter((res) =>
      res.data.name.includes(searchText)
    );
    return filteredData;
  }

  return (
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
            const data = filteredData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restro_cards">
        {restaurants.map((res) => {
          return (
            <div key={res?.data?.id}>
              <RestaurantCard {...res.data} />
            </div>
          );
        })}
      </div>
    </>
  );
};

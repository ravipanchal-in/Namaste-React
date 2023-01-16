import React, { useState } from "react";
import "./main.css";
import restrautList from "../../constants/RestaurantsList";
import RestaurantCard from "../card/RestaurantCard";

const Main = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restrautList);

  const handleSearch = () => {
    const filteredData = restaurants.filter((item) =>
      item.data.name.includes(searchText)
    );
    setRestaurants(filteredData);
  };

  console.log("restaurants", restaurants);
  console.log("searchText", searchText);
  return (
    <main className="container">
      <div className="row">
        <div className="search-view">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type="text"
            placeholder="Search here..."
          />
          <button onClick={() => handleSearch()}>Search</button>
        </div>
        <div className="main">
          {restaurants?.map((item) => (
            <RestaurantCard key={item.data.id} {...item.data} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;

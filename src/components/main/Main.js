import React, { useState, useEffect } from "react";
import "./main.css";
import RestaurantCard from "../card/RestaurantCard";
import ShimmerCard from "../shimmer-ui/Shimmer";

const Main = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await res.json();
    setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  const handleSearch = () => {
    const filteredData = allRestaurants.filter((item) =>
      item?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    setFilteredRestaurants(filteredData);
  };

  return !allRestaurants ? null : (
    <main className="container">
      <div className="row">
        <div className="search-view">
          <div>{filteredRestaurants?.length} restaurants</div>
          <div>
            <input
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              type="text"
              placeholder="Search here..."
            />
            <button onClick={() => handleSearch()}>Search</button>
          </div>
        </div>
        <div className="main">
          {allRestaurants?.length === 0
            ? Array(12)
                .fill("")
                .map((item, index) => <ShimmerCard key={index} />)
            : filteredRestaurants?.map((item) => (
                <RestaurantCard key={item.data.id} {...item.data} />
              ))}
          {filteredRestaurants?.length === 0 && <h1>No Restaurant found</h1>}
        </div>
      </div>
    </main>
  );
};

export default Main;

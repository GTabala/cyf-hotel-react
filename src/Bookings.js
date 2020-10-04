import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = searchVal => {
    setBookings(
      bookings.filter(
        item =>
          item.firstName.toLowerCase() === searchVal.toLowerCase() ||
          item.surname.toLowerCase() === searchVal.toLowerCase()
      )
    );
  };
  useEffect(() => {
    // fetch("https://cyf-react.glitch.me/error")
    fetch("https://cyf-react.glitch.me")
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setBookings(data);
      });
  }, []);
  console.log();
  if (bookings.error) {
    return <div>Error: {bookings.error}</div>;
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          {<SearchResults results={bookings} />}
        </div>
      </div>
    );
  }
};

export default Bookings;

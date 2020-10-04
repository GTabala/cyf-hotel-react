import React, { useEffect, useState } from "react";
import NewCustomer from "./NewCustomer.js";
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
        // console.log(data);
        setBookings(data);
      });
  }, []);

  const addCustomer = newCustomer => {
    setBookings(bookings.concat(newCustomer));
  };

  // const sortBookings = () => {
  // //   alert("Hooray!");
  // // setBookings(bookings.filter(
  // //   item =>
  // //     item.firstName.toLowerCase() === "john"
  // // ));
  // setBookings(bookings.sort((a, b) => a.title.localeCompare(b.title)))
  // console.log(bookings);
  // };

  if (bookings.error) {
    return <div>Error: {bookings.error}</div>;
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <NewCustomer addCustomer={addCustomer} />
          <Search search={search} />
          <SearchResults results={bookings} />
          {/* <button onClick={sortBookings}>Try</button> */}
        </div>
      </div>
    );
  }
};

export default Bookings;

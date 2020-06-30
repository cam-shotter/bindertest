import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import { BulkCardDisplayTable } from "../../bulkCardDisplayTable/BulkCardDisplayTable";

//TODO think of better name for this component
export function PaginationContainer() {
  const [activePage, setActivePage] = useState(1);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(10);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  useEffect(() => {
    fetch("https://api.scryfall.com/bulk-data/default_cards")
      .then((res) => res.json())
      .then(
        (result) => {
          fetch(result.download_uri)
            .then((res) => res.json())
            .then((result) => {
              setIsLoaded(true);
              setItems(result);
              setItemsToDisplay(
                result.slice(
                  activePage * itemsCountPerPage - itemsCountPerPage,
                  activePage * itemsCountPerPage
                )
              );
            });
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, []);
  //TODO: setting state inside useEffect creates infinite loop, move object mapping out of this component
  useEffect(() => {
    setItemsToDisplay(
      items.slice(
        activePage * itemsCountPerPage - itemsCountPerPage,
        activePage * itemsCountPerPage
      )
    );
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <BulkCardDisplayTable listOfCardsToDisplay={itemsToDisplay} />
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={items.length}
          pageRangeDisplayed={5}
          onChange={setActivePage.bind(this)}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    );
  }
}

import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BulkCardDisplayTable } from "../../bulkCardDisplayTable/BulkCardDisplayTable";
import "./PaginationContainer.scss";

//TODO think of better name for this component
export function PaginationContainer() {
  const [activePage, setActivePage] = useState(1);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(12);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  useEffect(() => {
    fetch("https://api.scryfall.com/bulk-data/default_cards")
      .then((res) => res.json())
      .then(
        (res) => {
          fetch(res.download_uri)
            .then((res) => res.json())
            .then((res) => {
              setItems(res);
              setItemsToDisplay(
                res.slice(
                  activePage * itemsCountPerPage - itemsCountPerPage,
                  activePage * itemsCountPerPage
                )
              );
              setIsLoaded(true);
            });
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
  }, []);

  useEffect(() => {
    let firstItemPosition =
      activePage * itemsCountPerPage - itemsCountPerPage - 1;
    let lastItemPosition = activePage * itemsCountPerPage - 1;
    let nextItemSlice = items.slice(firstItemPosition, lastItemPosition);
    setItemsToDisplay(nextItemSlice);
  }, [activePage]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <BulkCardDisplayTable listOfCardsToDisplay={itemsToDisplay} />
        <Row>
          <Col xl={12}>
            <Pagination
              activePage={activePage}
              itemsCountPerPage={itemsCountPerPage}
              totalItemsCount={items.length}
              pageRangeDisplayed={5}
              onChange={setActivePage.bind(this)}
              itemClass="page-item"
              linkClass="page-link"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

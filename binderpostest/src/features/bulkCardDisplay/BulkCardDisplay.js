import React, { useState, useEffect } from "react";

export function BulkCardDisplay() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

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
              console.log("Cards result: ", result);
            });
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {/* {items.map(item => (
          <li key={item.name}>
            {item.name} {item.price}
          </li>
        ))} */}
      </ul>
    );
  }
}

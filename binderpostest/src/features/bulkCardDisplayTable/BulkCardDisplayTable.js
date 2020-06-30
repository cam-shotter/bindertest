import React from "react";

export function BulkCardDisplayTable({ listOfCardsToDisplay }) {
  return (
    <ul>
      {listOfCardsToDisplay.map((item) => (
        <li key={item.name}>
          {item.name} {item.price}
        </li>
      ))}
    </ul>
  );
}

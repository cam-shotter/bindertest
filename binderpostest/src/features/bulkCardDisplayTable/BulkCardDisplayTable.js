import React from "react";

export function BulkCardDisplayTable({ listOfCardsToDisplay }) {
  return (
    <ul>
      {listOfCardsToDisplay.map((item, index) => (
        <li key={index}>
          {item.name} {item.id}
        </li>
      ))}
    </ul>
  );
}

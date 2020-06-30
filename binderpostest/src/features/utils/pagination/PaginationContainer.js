import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import { BulkCardDisplay } from "../../bulkCardDisplay/BulkCardDisplay";

export function PaginationContainer() {
  const [activePage, setActivePage] = useState(15);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(10);

  useEffect(() => {
    console.log(`active page is ${activePage}`);
  });

  return (
    <div>
      <BulkCardDisplay />
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={setActivePage.bind(this)}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
  );
}

import React from "react";
import { useParams } from "react-router-dom";

// import "./CardMoreInfo.module.scss";

export function CardMoreInfo() {
  let { set, collectornumber } = useParams();

  return (
    <div>
      <h3>Set: {set}</h3>
      <h3>Collector number: {collectornumber}</h3>
    </div>
  );
}

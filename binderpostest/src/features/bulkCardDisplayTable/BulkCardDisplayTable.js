import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicCard } from "../cards/BasicCard";

import "./BulkCardDisplayTable.module.scss";

export function BulkCardDisplayTable({ listOfCardsToDisplay }) {
  return (
    <Row>
      {listOfCardsToDisplay.map((card, index) => (
        <Col xs={12} sm={6} md={4} lg={3} key={index}>
          <div className="Card-container">
            <BasicCard cardToDisplay={card} />
          </div>
        </Col>
      ))}
    </Row>
  );
}

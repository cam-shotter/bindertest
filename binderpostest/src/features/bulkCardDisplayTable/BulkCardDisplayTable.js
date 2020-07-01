import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicCard } from "../cards/BasicCard";

export function BulkCardDisplayTable({ listOfCardsToDisplay }) {
  return (
    <Row>
      {listOfCardsToDisplay.map((card, index) => (
        <Col xs={12} md={3} key={index}>
          <BasicCard cardToDisplay={card} />
        </Col>
      ))}
    </Row>
  );
}

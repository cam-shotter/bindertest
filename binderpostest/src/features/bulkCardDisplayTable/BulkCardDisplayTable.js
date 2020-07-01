import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function BulkCardDisplayTable({ listOfCardsToDisplay }) {
  return (
    <Row>
      {listOfCardsToDisplay.map((item, index) => (
        <Col xs={12} md={3} key={index}>
          {item.name} {item.id}
        </Col>
      ))}
    </Row>
  );
}

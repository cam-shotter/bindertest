import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import { BasicCard } from "../cards/BasicCard";

import "./BulkCardDisplayTable.scss";

export function BulkCardDisplayTable({ listOfCardsToDisplay }) {
  return (
    <Row>
      <CardGroup>
        {listOfCardsToDisplay.map((card, index) => (
          <Col xs={12} sm={6} md={4} key={index}>
            <div className="Card-container">
              <BasicCard cardToDisplay={card} />
            </div>
          </Col>
        ))}
      </CardGroup>
    </Row>
  );
}

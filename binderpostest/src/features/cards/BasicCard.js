import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./BasicCard.scss";

export function BasicCard({ cardToDisplay }) {
  return (
    <Card>
      <Card.Img variant="top" src={cardToDisplay.image_uris.art_crop} />
      <Card.Header className="card-header">
        <Card.Title>Name: {cardToDisplay.name}</Card.Title>
        <Card.Subtitle className="text-muted">
          ID: {cardToDisplay.id}
        </Card.Subtitle>
      </Card.Header>
      <Card.Body className="card-body">
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            Set name: {cardToDisplay.set_name} - {cardToDisplay.set_type}
          </ListGroupItem>
          <ListGroupItem>
            Collector no.: {cardToDisplay.collector_number}
          </ListGroupItem>
          <Row>
            {Object.keys(cardToDisplay.legalities).map(
              (legalityType, index) => (
                <Col xs={12} sm={6} key={index}>
                  <span className="legalities-box">{legalityType}</span>
                  {cardToDisplay.legalities[legalityType]}
                </Col>
              )
            )}
          </Row>
          <ListGroupItem>Rarity: {cardToDisplay.rarity}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Text>{cardToDisplay.flavor_text}</Card.Text>
          <Card.Text>{cardToDisplay.oracle_text}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Link to={`/${cardToDisplay.set}/${cardToDisplay.collector_number}`}>
            More Info
          </Link>
        </Card.Body>
      </Card.Body>
    </Card>
  );
}

import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import "./BasicCard.module.scss";

export function BasicCard({ cardToDisplay }) {
  return (
    <Card>
      <Card.Img variant="top" src={cardToDisplay.image_uris.art_crop} />
      <Card.Body>
        <Card.Title>Name: {cardToDisplay.name}</Card.Title>
        <Card.Subtitle className="text-muted">
          ID: {cardToDisplay.id}
        </Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          Set name: {cardToDisplay.set_name} - {cardToDisplay.set_type}
        </ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem>
          Collector no.: {cardToDisplay.collector_number}
        </ListGroupItem>
        {/* {cardToDisplay.legalities.map((legality, index) => (
            <ListGroupItem key={index}>{legality}</ListGroupItem>
        ))} */}
        <ListGroupItem>Rarity: {cardToDisplay.rarity}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Text>
          {/* <img src={cardToDisplay.image_uris.art_crop}/> */}
          {cardToDisplay.flavor_text}
        </Card.Text>
        <Card.Text>{cardToDisplay.oracle_text}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Link to={`/${cardToDisplay.set}/${cardToDisplay.collector_number}`}>
          More Info
        </Link>
      </Card.Body>
    </Card>
  );
}

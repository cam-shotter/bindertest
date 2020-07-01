import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export function BasicCard({ cardToDisplay }) {
  return (
    <Card>
      <Card.Img variant="top" src={cardToDisplay.image_uris.art_crop} />
      <Card.Body>
        <Card.Title>Name: {cardToDisplay.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>ID: {cardToDisplay.id}</ListGroupItem>
        <ListGroupItem>
          Set name: {cardToDisplay.set_name} - {cardToDisplay.set_type}
        </ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem>
          Collector no.: {cardToDisplay.collector_number}
        </ListGroupItem>
        {/* <ListGroupItem>{cardToDisplay.legalities}</ListGroupItem> */}
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
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

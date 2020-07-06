import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import "./CardMoreInfo.scss";

export function CardMoreInfo() {
  let { set, collectornumber } = useParams();
  const [cardDetails, setCardDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://api.scryfall.com/cards/${set}/${collectornumber}`)
      .then((res) => res.json())
      .then(
        (res) => {
          setCardDetails(res);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
  }, [cardDetails]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (!cardDetails) {
    return <div>Card details not loaded...</div>;
  } else {
    return (
      <div>
        {/* TODO: Extract to separate component */}
        <Row>
          <Col xs={12} md={4}>
            <img
              src={cardDetails.image_uris.normal}
              className="more-info-image"
            ></img>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Header as="h3" className="card-header">
                {cardDetails.name}
              </Card.Header>
              <Card.Body>
                <Card.Subtitle className="text-muted">
                  {cardDetails.id}
                </Card.Subtitle>
              </Card.Body>
              <Card.Body>
                <Card.Text>
                  {/* <img src={cardDetails.image_uris.art_crop}/> */}
                  {cardDetails.oracle_text}
                </Card.Text>
                <Card.Text>
                  <i>{cardDetails.flavor_text}</i>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Row>
                  {Object.keys(cardDetails.legalities).map(
                    (legalityType, index) => (
                      <Col
                        xs={12}
                        md={6}
                        className="legalities-box-space"
                        key={index}
                      >
                        <span className="legalities-box">{legalityType}</span>
                        {cardDetails.legalities[legalityType]}
                      </Col>
                    )
                  )}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Header as="h3" className="card-header">
                <Card.Title>
                  {cardDetails.set_name}({cardDetails.set})
                </Card.Title>
                <Card.Subtitle>
                  {cardDetails.collector_number} {cardDetails.rarity}{" "}
                  {cardDetails.lang}
                </Card.Subtitle>
              </Card.Header>
              <Card.Body className="card-body">
                <ListGroup>
                  <ListGroupItem>
                    <Row>
                      {Object.keys(cardDetails.prices).map(
                        (currency, index) => (
                          <Col
                            xs={6}
                            md={3}
                            className="prices-box-space"
                            key={index}
                          >
                            <Row>
                              <strong className="to-upper">{currency}</strong>
                            </Row>
                            <Row>
                              {cardDetails.prices[currency] || "No price"}
                            </Row>
                          </Col>
                        )
                      )}
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to={cardDetails.prints_search_uri}>
                      View all prints
                    </Link>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        {/* TODO: Extract to separate component */}
        <Row>
          <Col xs={12} md={6}>
            <Card>
              <Card.Header as="h4">
                <Card.Title>BUY THIS CARD</Card.Title>
              </Card.Header>
              <Card.Body>
                {Object.keys(cardDetails.purchase_uris).map(
                  (purchaseType, index) => (
                    <Card.Text>
                      <Link
                        to={cardDetails.purchase_uris[purchaseType]}
                        key={index}
                      >
                        Download {purchaseType} image
                      </Link>
                      <hr />
                    </Card.Text>
                  )
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <Card.Header as="h4">
                <Card.Title>IMAGES AND COPY-PASTE</Card.Title>
              </Card.Header>
              <Card.Body>
                {Object.keys(cardDetails.image_uris).map((imageType, index) => (
                  <Card.Text>
                    <Link to={cardDetails.image_uris[imageType]} key={index}>
                      Download {imageType} image
                    </Link>
                    <hr />
                  </Card.Text>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

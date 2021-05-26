import React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CardData(props) {
  return (
    <div>
      <Row id="home">
        {props.items &&
          props.items.map((item) => {
            return (
              <Col style={{ padding: "1rem" }} key={item.id} md={4}>
                <Card
                  border="primary"
                  style={{ width: "18rem", marginLeft: "50px" }}
                >
                  <Card.Img variant="top" src={item.avatar} />
                  <Card.Body>
                    <Card.Title>{item.first_name}</Card.Title>
                    <Card.Text>{item.last_name}</Card.Text>
                    <Card.Text>{item.email}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default CardData;

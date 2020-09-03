/* import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../card/card.scss";

const Object = (props) => {
  return (
    <div className="cardproduct">
      <Link to={"/product/" + props.id}>
        <button>
          <Card style={{ width: "14rem", border: "none" }}>
            <Card.Img className="img" variant="top" src={props.img} alt="" />
            <Card.Body>
              <Card.Text>{props.price}</Card.Text>
              <Card.Title>{props.brand}</Card.Title>

              <Card.Text>{props.title}</Card.Text>

              <Card.Text>{props.gender}</Card.Text>
              <Card.Text>{props.discription}</Card.Text>
            </Card.Body>
          </Card>
        </button>
      </Link>
      <hr />
    </div>
  );
};

export default Object;
 */

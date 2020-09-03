import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./art.scss";
import { listProducts } from "../actions/productAction";

const Body = () => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <div className="card">
        {products.map((clo) => (
          <div className="cardproduct" key={clo._id}>
            <Link to={"/product/" + clo._id}>
              <button>
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Img
                    className="img"
                    variant="top"
                    src={clo.img}
                    alt=""
                  />
                  <Card.Body>
                    <Card.Text>{clo.price}</Card.Text>
                    <Card.Title>{clo.brand}</Card.Title>

                    <Card.Text>{clo.gender}</Card.Text>
                    <Card.Text>{clo.discription}</Card.Text>
                  </Card.Body>
                </Card>
              </button>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;

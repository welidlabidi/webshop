import React, { useEffect, useState } from "react";
import "./product.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { detailsProduct } from "../../actions/productAction";

const ProductScreen = (props) => {
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const history = useHistory();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, []);

  const cartHandler = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

  return loading ? (
    <div> loading... </div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="productscreen">
      <div className="product">
        <div className="productimg">
          <img src={product.img} alt="" />
        </div>
        <div className="productdetails">
          <h3>{product.brand}</h3>
          <li>{product.gender}</li>
          <li>{product.discription}</li>
          <li>
            <strong style={{ color: "red" }}>€{product.price}</strong>
          </li>
        </div>
        <div className="productselection">
          <li>Price:€{product.price}</li>
          <li>
            Qty:
            <select
              value={qty}
              onChange={(e) => {
                setQty(e.target.value);
              }}
            >
              {[...Array(product.inStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </li>
          <div className="btn-add">
            {product.inStock > 0 ? (
              <button onClick={cartHandler}>Add to Chart</button>
            ) : (
              <p style={{ color: "red" }}>Out Of Stock</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;

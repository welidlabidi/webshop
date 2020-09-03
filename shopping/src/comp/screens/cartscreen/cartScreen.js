import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartaction";

const CartScreen = (props) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems.price);
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  return (
    <div>
      <div>
        <ul>
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <div key={item.product}>
                <img src={item.img} alt="product" />
                <div>{item.brand}</div>
                <div>
                  Qty:
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div>{item.price}</div>
              </div>
            ))
          )}
        </ul>
      </div>
      <div>
        <h3>
          Subtotal( {cartItems.reduce((a, c) => a + c.qty, 0)} items ): €
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          {console.log(cartItems.reduce((a, c) => a + c.price * c.qty, 0))}
          {console.log(cartItems)}
        </h3>
        <button disabled={cartItems.length === 0}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartScreen;

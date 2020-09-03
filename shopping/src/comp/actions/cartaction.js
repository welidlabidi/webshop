import { CART_ADD_ITEM } from "../constants/cartconst";

const { default: Axios } = require("axios");

const addToCart = (productId, qty) => async (dispatch) => {
  try {
    const { data } = await Axios.get("/api/products/" + productId);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        brand: data.brand,
        img: data.img,
        price: data.price,
        inStock: data.inStock,
        qty,
      },
    });
  } catch (error) {}
};

export { addToCart };

import React from "react";
import Header from "../header/header";
import Body from "../body/articals";
import Footer from "../footer/footer";
import { BrowserRouter, Route } from "react-router-dom";
import ProductScreen from "../screens/productscreen/productscreen";
import CartScreen from "../screens/cartscreen/cartScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route path="/" exact={true} component={Body} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

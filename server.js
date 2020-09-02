const express = require("express");
const clothes = require("./clothes").clothes;

const app = express();

app.get("/api/products", (req, res) => {
  res.send(clothes);
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = clothes.find((x) => x._id === productId);
  if (product) res.send(product);
  else res.status(404).send({ msg: "Product Not Found." });
});

const port = process.env.PORT || 5000;
try {
  app.listen(5000, () => {
    console.log("server start at port " + port);
  });
} catch (error) {
  console.log(error);
}

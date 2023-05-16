const express = require("express");
const Product = require("./models/product");
const port = process.env.PORT || 8000;
require("dotenv").config();
require("./db/conn")
const product_router = require("./routes/product");

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Products Api"));

app.use("/products", product_router);

app.listen(port, () => console.log(`Listening at port ${port}`));
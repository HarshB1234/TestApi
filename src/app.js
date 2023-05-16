const express = require("express");
const Product = require("./models/product");
const Register = require("./models/register");
const port = process.env.PORT || 8000;
require("dotenv").config();
require("./db/conn")
const product_router = require("./routes/product");
const register_router = require("./routes/register");
const login_router = require("./routes/login");

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Products Api"));

app.use("/products", product_router);
app.use("/register", register_router);
app.use("/login", login_router);

app.listen(port, () => console.log(`Listening at port ${port}`));
const express = require("express");
const router = express.Router();
const {addProduct, getProducts, getProduct, updateProduct, deleteProduct} = require("../controllers/product");

router.route("/").post(addProduct);
router.route("/").get(getProducts);
router.route("/:pid").get(getProduct);
router.route("/").put(updateProduct);
router.route("/").delete(deleteProduct);

module.exports = router;
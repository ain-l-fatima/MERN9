const router = require("express").Router();
const { addProduct, getProduct } = require("../controllers/productController");
const { vendor } = require("../middleware");

router.post("/addProduct", vendor, addProduct);
router.get("/getProducts", vendor, getProduct);

module.exports = router;
